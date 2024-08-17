import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaSave, FaTimes, FaPlusCircle } from 'react-icons/fa';

function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payments, setPayments] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    amount: '',
    paymentMethod: '',
    firstName: '',
    lastName: ''
  });

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get('http://localhost:8070/payment');
      setPayments(response.data.data); 
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handleOpenModal = (payment = null) => {
    if (payment) {
      setFormData(payment);
    } else {
      setFormData({
        id: null,
        amount: '',
        paymentMethod: '',
        firstName: '',
        lastName: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        const { id, ...paymentData } = formData;
        const response = await axios.put(`http://localhost:8070/payment/${id}`, paymentData);
        setPayments(payments.map(payment => payment.id === id ? response.data.data : payment)); 

      } else {
        const response = await axios.post('http://localhost:8070/payment', formData);
        setPayments([...payments, response.data.data]); 
      }
      handleCloseModal();
    } catch (error) {
      console.error('Error saving payment:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8070/payment/${id}`);
      setPayments(payments.filter(payment => payment.id !== id));
    } catch (error) {
      console.error('Error deleting payment:', error);
    }
  };

  return (
    <>
      <div className="p-10">
        <div className="flex justify-start">
          <button onClick={() => handleOpenModal()} className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 flex items-center">
            <FaPlusCircle className="mr-2" /> Add Payment
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Payment Id</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
                <th className="py-2 px-4 border-b text-left">Payment Method</th>
                <th className="py-2 px-4 border-b text-left">First Name</th>
                <th className="py-2 px-4 border-b text-left">Last Name</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment.id} className="hover:bg-gray-100 transition duration-300">
                  <td className="py-2 px-4 border-b">{payment.id}</td>
                  <td className="py-2 px-4 border-b">{payment.amount}</td>
                  <td className="py-2 px-4 border-b">{payment.paymentMethod}</td>
                  <td className="py-2 px-4 border-b">{payment.firstName}</td>
                  <td className="py-2 px-4 border-b">{payment.lastName}</td>
                  <td className="py-2 px-4 border-b flex items-center">
                    <button onClick={() => handleOpenModal(payment)} className="px-2 py-1 bg-yellow-500 text-white rounded-full mr-2 hover:bg-yellow-600 transition duration-300 flex items-center">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(payment.id)} className="px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 flex items-center">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button onClick={handleCloseModal} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 text-2xl">
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              {formData.id ? <FaEdit className="mr-2 text-yellow-500" /> : <FaPlusCircle className="mr-2 text-blue-500" />}
              {formData.id ? 'Edit Payment' : 'Add New Payment'}
            </h2>
            <form className="w-96" onSubmit={handleSubmit}>
              <div className="mt-2">
                <label className="block text-gray-700">Amount:</label>
                <input type="text" name="amount" className="border p-2 w-full rounded" value={formData.amount} onChange={handleInputChange} />
              </div>
              <div className="mt-2">
                <label className="block text-gray-700">Payment Method:</label>
                <input type="text" name="paymentMethod" className="border p-2 w-full rounded" value={formData.paymentMethod} onChange={handleInputChange} />
              </div>
              <div className="mt-2">
                <label className="block text-gray-700">First Name:</label>
                <input type="text" name="firstName" className="border p-2 w-full rounded" value={formData.firstName} onChange={handleInputChange} />
              </div>
              <div className="mt-2">
                <label className="block text-gray-700">Last Name:</label>
                <input type="text" name="lastName" className="border p-2 w-full rounded" value={formData.lastName} onChange={handleInputChange} />
              </div>
              <div className="flex justify-end mt-4">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-red-500 text-white rounded-full mr-2 hover:bg-red-600 transition duration-300 flex items-center">
                  <FaTimes className="mr-2" /> Close
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-full flex items-center hover:bg-blue-600 transition duration-300">
                  <FaSave className="mr-2" /> {formData.id ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Payment;
