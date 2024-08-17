import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    gender: '',
    nationality: '',
    firstname: '',
    lastname: '',
    address: '',
    customerId: 0, 
    roomId: 0 
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8070/booking');
        setBookings(response.data.data); // Adjust according to your API response structure
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleOpenModal = (booking = null) => {
    if (booking) {
      setFormData(booking);
    } else {
      setFormData({
        id: 0,
        gender: '',
        nationality: '',
        firstname: '',
        lastname: '',
        address: '',
        customerId: 0, 
        roomId: 0
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePost = async () => {
    try {
      console.log(formData)
      const response = await axios.post('http://localhost:8070/booking', formData);
      console.log(response)
      setBookings([...bookings, response.data.data]); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error adding booking:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8070/booking/${formData.id}`, formData);
      setBookings(bookings.map(booking => booking.id === formData.id ? response.data.data : booking)); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await handleUpdate();
    } else {
      await handlePost();
    }
    handleCloseModal();
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/booking/${id}`);
      setBookings(bookings.filter(booking => booking.id !== id));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <>
      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button onClick={handleCloseModal} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">×</button>
            <h2 className="text-lg font-bold mb-2">{formData.id ? 'Edit Booking' : 'Add New Booking'}</h2>
            <form className='w-96' onSubmit={handleSubmit}>
              <div className="mt-2">
                <label className="block">Booking Id:</label>
                <input
                  type="text"
                  name="id"
                  className="border p-2 w-full"
                  value={formData.id || ''}
                  onChange={handleInputChange}
                  disabled={formData.id ? true : false}
                />
              </div>
              <div className="mt-2">
                <label className="block">Gender:</label>
                <input
                  type="text"
                  name="gender"
                  className="border p-2 w-full"
                  value={formData.gender || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block">Nationality:</label>
                <input
                  type="text"
                  name="nationality"
                  className="border p-2 w-full"
                  value={formData.nationality || ''}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block">First Name:</label>
                <input
                  type="text"
                  name="firstname"
                  className="border p-2 w-full"
                  value={formData.firstname || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-2">
                <label className="block">Last Name:</label>
                <input
                  type="text"
                  name="lastname"
                  className="border p-2 w-full"
                  value={formData.lastname || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-2">
                <label className="block">Address:</label>
                <input
                  type="text"
                  name="address"
                  className="border p-2 w-full"
                  value={formData.address || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-2">
                <label className="block">Customer Id:</label>
                <input
                  type="number"
                  name="customerId"
                  className="border p-2 w-full"
                  value={formData.customerId || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-2">
                <label className="block">Room Id:</label>
                <input
                  type="number"
                  name="roomId"
                  className="border p-2 w-full"
                  value={formData.roomId || ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end mt-4">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-red-500 text-white rounded-full mr-2">Close</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full">{formData.id ? 'Update' : 'Save'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Booking Component */}
      <div className="p-10">
        <div className="flex justify-start">
          <button onClick={() => handleOpenModal()} className="px-4 py-2 bg-blue-500 text-white rounded-full">Add Booking</button>
        </div>
      </div>

      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Booking Id</th>
                <th className="py-2 px-4 border-b">Gender</th>
                <th className="py-2 px-4 border-b">Nationality</th>
                <th className="py-2 px-4 border-b">First Name</th>
                <th className="py-2 px-4 border-b">Last Name</th>
                <th className="py-2 px-4 border-b">Address</th>

                <th className="py-2 px-4 border-b">Room Number</th> {/* Added */}
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-100 transition duration-300">
                  <td className="py-2 px-4 border-b">{booking.id}</td>
                  <td className="py-2 px-4 border-b">{booking.gender}</td>
                  <td className="py-2 px-4 border-b">{booking.nationality}</td>
                  <td className="py-2 px-4 border-b">{booking.firstname}</td>
                  <td className="py-2 px-4 border-b">{booking.lastname}</td>
                  <td className="py-2 px-4 border-b">{booking.address}</td>
              
                  <td className="py-2 px-4 border-b">{booking.room.roomfloor}</td> {/* Added */}
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => handleOpenModal(booking)} className="px-2 py-1 bg-yellow-500 text-white rounded-full mr-2 hover:bg-yellow-600 transition duration-300">Edit</button>
                    <button onClick={() => handleDelete(booking.id)} className="px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Booking;
