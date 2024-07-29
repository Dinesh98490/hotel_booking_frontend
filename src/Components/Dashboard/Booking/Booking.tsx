import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Modal Component
const Modal = ({ isOpen, onClose, onSubmit, formData, setFormData, customers, rooms }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg relative">
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">×</button>
        <h2 className="text-lg font-bold mb-2">{formData.id ? 'Edit Booking' : 'Add New Booking'}</h2>
        <form className='w-96' onSubmit={onSubmit}>
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
            <label className="block">Customer Id:</label>
            <input
              type="number"
              name="customerId"
              className="border p-2 w-full"
              value={formData.customerId || ''}
              onChange={handleInputChange}
              required
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
              required
            />
          </div>
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-full mr-2">Close</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full">{formData.id ? 'Update' : 'Save'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Booking Component
function Booking() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    customerId: '',
    roomId: ''
  });

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8070/booking');
        console.log(response)
        setBookings(response.data.data); // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8070/customer'); // Adjust as needed
        setCustomers(response.data.data); // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:8070/room'); // Adjust as needed
        setRooms(response.data.data); // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchBookings();
    fetchCustomers();
    fetchRooms();
  }, []);

  const handleOpenModal = (booking = null) => {
    if (booking) {
      setFormData(booking);
    } else {
      setFormData({
        id: '',
        customerId: '',
        roomId: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePost = async () => {
    try {
      const response = await axios.post('http://localhost:8070/booking', formData);
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

  const getCustomerName = (id) => {
    const customer = customers.find(cust => cust.id === id);
    return customer ? `${customer.firstName} ${customer.lastName}` : 'Unknown';
  };

  const getRoomNumber = (id) => {
    const room = rooms.find(rm => rm.id === id);
    return room ? room.roomNumber : 'Unknown';
  };

  return (
    <>
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
                <th className="py-2 px-4 border-b">Customer Name</th>
                <th className="py-2 px-4 border-b">Room Number</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-100 transition duration-300">
                  <td className="py-2 px-4 border-b">{booking.id}</td>
                  <td className="py-2 px-4 border-b">{booking.customer.firstName}</td>
                  <td className="py-2 px-4 border-b">{booking.room.roomFloor}</td>
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} formData={formData} setFormData={setFormData} customers={customers} rooms={rooms} />
    </>
  );
}

export default Booking;
