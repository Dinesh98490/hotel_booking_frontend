import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, onSubmit, formData, setFormData }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 text-2xl">×</button>
        <h2 className="text-2xl font-bold mb-4">{formData.id ? 'Edit Customer' : 'Add New Customer'}</h2>
        <form className="w-96" onSubmit={onSubmit}>
          <div className="mt-2">
            <label className="block text-gray-700">Customer Id:</label>
            <input type="text" name="id" className="border p-2 w-full rounded" value={formData.id} onChange={handleInputChange} />
          </div>
          <div className="mt-2">
            <label className="block text-gray-700">First Name:</label>
            <input type="text" name="firstName" className="border p-2 w-full rounded" value={formData.firstName} onChange={handleInputChange} />
          </div>
          <div className="mt-2">
            <label className="block text-gray-700">Last Name:</label>
            <input type="text" name="lastName" className="border p-2 w-full rounded" value={formData.lastName} onChange={handleInputChange} />
          </div>
          <div className="mt-2">
            <label className="block text-gray-700">Address:</label>
            <input type="text" name="address" className="border p-2 w-full rounded" value={formData.address} onChange={handleInputChange} />
          </div>
          <div className="mt-2">
            <label className="block text-gray-700">Phone Number:</label>
            <input type="text" name="phoneNumber" className="border p-2 w-full rounded" value={formData.phoneNumber} onChange={handleInputChange} />
          </div>
          <div className="mt-2">
            <label className="block text-gray-700">Email:</label>
            <input type="text" name="email" className="border p-2 w-full rounded" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="mt-2">
            <label className="block text-gray-700">CitizenShip No:</label>
            <input type="text" name="citizenshipNo" className="border p-2 w-full rounded" value={formData.citizenshipNo} onChange={handleInputChange} />
          </div>
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-full mr-2 hover:bg-red-600 transition duration-300">Close</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">{formData.id ? 'Update' : 'Save'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Customer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    citizenshipNo: ''
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8070/customer');
      console.log()
      setCustomers(response.data.data); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleOpenModal = (customer = null) => {
    if (customer) {
      setFormData(customer);
    } else {
      setFormData({
        id: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        citizenshipNo: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        console.log(formData)
        const response = await axios.put(`http://localhost:8070/customer/${formData.id}`, formData);
        setCustomers(customers.map(customer => customer.id === formData.id ? response.data.data : customer)); // Adjust according to your API response structure
      } else {
        const response = await axios.post('http://localhost:8070/customer', formData);
        console.log(response)
        setCustomers([...customers, response.data.data]); // Adjust according to your API response structure
      }
      handleCloseModal();
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/customer/${id}`);
      setCustomers(customers.filter(customer => customer.id !== id));
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <>
      <div className="p-10">
        <div className="flex justify-start">
          <button onClick={() => handleOpenModal()} className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">Add Customer</button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            {/* Other content can go here */}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Customer Id</th>
                <th className="py-2 px-4 border-b">First Name</th>
                <th className="py-2 px-4 border-b">Last Name</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Phone Number</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">CitizenShip No</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id} className="hover:bg-gray-100 transition duration-300">
                  <td className="py-2 px-4 border-b">{customer.id}</td>
                  <td className="py-2 px-4 border-b">{customer.firstName}</td>
                  <td className="py-2 px-4 border-b">{customer.lastName}</td>
                  <td className="py-2 px-4 border-b">{customer.address}</td>
                  <td className="py-2 px-4 border-b">{customer.phoneNumber}</td>
                  <td className="py-2 px-4 border-b">{customer.email}</td>
                  <td className="py-2 px-4 border-b">{customer.citizenshipno}</td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => handleOpenModal(customer)} className="px-2 py-1 bg-yellow-500 text-white rounded-full mr-2 hover:bg-yellow-600 transition duration-300">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(customer.id)} className="px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </>
  );
}

export default Customer;
