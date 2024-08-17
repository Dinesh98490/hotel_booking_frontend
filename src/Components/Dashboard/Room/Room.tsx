import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const RoomTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    // roomNumber: '',
    roomFloor: '',
    roomType: '',
    pricePerNight: '',
    availabilityStatus: ''
  });

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:8070/room');
        console.log('API Response:', response.data); 
        setRooms(response.data.data);  
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, []);

  const handleOpenModal = (room = null) => {
    if (room) {
      setFormData(room);
    } else {
      setFormData({
        id: null,
        roomNumber: '',
        roomFloor: '',
        roomType: '',
        pricePerNight: '',
        availabilityStatus: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePost = async () => {
    try {
      const response = await axios.post('http://localhost:8070/room', formData);
      setRooms(prevRooms => [...prevRooms, response.data.data]);
    } catch (error) {
      console.error('Error adding room:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8070/room/${formData.id}`, formData);
      setRooms(prevRooms => 
        prevRooms.map(room => room.id === formData.id ? response.data.data : room)
      );
    } catch (error) {
      console.error('Error updating room:', error);
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
      await axios.delete(`http://localhost:8070/room/${id}`);
      setRooms(prevRooms => prevRooms.filter(room => room.id !== id));
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  const Modal = ({ isOpen, onClose, onSubmit, formData, setFormData }) => {
    if (!isOpen) return null;

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className="bg-white p-4 rounded-lg shadow-lg z-10 relative">
          <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 text-2xl">×</button>
          <h2 className="text-2xl font-bold mb-4">{formData.id ? 'Edit Room' : 'Add New Room'}</h2>
          <form className='w-96' onSubmit={onSubmit}>
            <div className="mt-2">
              <label className="block">Room Number:</label>
              <input
                type="text"
                name="roomNumber"
                className="border p-2 w-full"
                value={formData.roomNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2">
              <label className="block">Room Floor:</label>
              <input
                type="text"
                name="roomFloor"
                className="border p-2 w-full"
                value={formData.roomFloor}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2">
              <label className="block">Room Type:</label>
              <input
                type="text"
                name="roomType"
                className="border p-2 w-full"
                value={formData.roomType}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2">
              <label className="block">Price Per Night:</label>
              <input
                type="text"
                name="pricePerNight"
                className="border p-2 w-full"
                value={formData.pricePerNight}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-2">
              <label className="block">Availability Status:</label>
              <input
                type="text"
                name="availabilityStatus"
                className="border p-2 w-full"
                value={formData.availabilityStatus}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-full">Close</button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full">{formData.id ? 'Update' : 'Save'}</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full">All rooms (100)</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-full">Available rooms (20)</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full">Booked (80)</button>
          </div>
          <button onClick={() => handleOpenModal()} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Room</button>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Room ID</th>
              <th className="py-2 px-4 border-b">Room Number</th>
              {/* <th className="py-2 px-4 border-b">Room Floor</th> */}
              <th className="py-2 px-4 border-b">Room Type</th>
              <th className="py-2 px-4 border-b">Price Per Night</th>
              <th className="py-2 px-4 border-b">Availability Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              <tr key={room.id} className="hover:bg-gray-100 transition duration-300">
                <td className="py-2 px-4 border-b">{room.id}</td>
                {/* <td className="py-2 px-4 border-b">{room.roomNumber}</td> */}
                <td className="py-2 px-4 border-b">{room.roomfloor}</td>
                <td className="py-2 px-4 border-b">{room.roomtype}</td>
                <td className="py-2 px-4 border-b">{room.pricepernight}</td>
                <td className="py-2 px-4 border-b">{room.availabilitystatus}</td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => handleOpenModal(room)} className="px-2 py-1 bg-yellow-500 text-white rounded-full mr-2 hover:bg-yellow-600 transition duration-300">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(room.id)} className="px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleSubmit} 
        formData={formData} 
        setFormData={setFormData} 
      />
    </>
  );
};

export default RoomTable;
