import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, onSubmit, formData, setFormData }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg">
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500">×</button>
        <h2 className="text-lg font-bold mb-2">{formData.id ? 'Edit Payment' : 'Add New Payment'}</h2>
        <form className='w-96' onSubmit={onSubmit}>
          <div className="mt-2">
            <label className="block">Payment Id:</label>
            <input
              type="text"
              name="id"
              className="border p-2 w-full"
              value={formData.id}
              onChange={handleInputChange}
              disabled={formData.id ? true : false}
            />
          </div>
          <div className="mt-2">
            <label className="block">Payment Date:</label>
            <input
              type="text"
              name="paymentDate"
              className="border p-2 w-full"
              value={formData.paymentDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-2">
            <label className="block">Amount:</label>
            <input
              type="text"
              name="amount"
              className="border p-2 w-full"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-2">
            <label className="block">Payment Method:</label>
            <input
              type="text"
              name="paymentMethod"
              className="border p-2 w-full"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-2">
            <label className="block">Booking Id:</label>
            <input
              type="text"
              name="bookingId"
              className="border p-2 w-full"
              value={formData.bookingId}
              onChange={handleInputChange}
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

function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payments, setPayments] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    paymentDate: '',
    amount: '',
    paymentMethod: '',
    bookingId: ''
  });

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8070/payment');
        console.log(response)
        setPayments(response.data.data); // Adjust according to your API response structure
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };
    fetchPayments();
  }, []);

  const handleOpenModal = (payment = null) => {
    if (payment) {
      setFormData(payment);
    } else {
      setFormData({
        id: '',
        paymentDate: '',
        amount: '',
        paymentMethod: '',
        bookingId: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePost = async () => {
    try {
      const response = await axios.post('http://localhost:8070/payment', formData);
      setPayments([...payments, response.data.data]); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error adding payment:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8070/payment/${formData.id}`, formData);
      setPayments(payments.map(payment => payment.id === formData.id ? response.data.data : payment)); // Adjust according to your API response structure
    } catch (error) {
      console.error('Error updating payment:', error);
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
          <button onClick={() => handleOpenModal()} className="px-4 py-2 bg-blue-500 text-white rounded-full">Add Payment</button>
        </div>
      </div>

      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b">Payment Id</th>
                <th className="py-2 px-4 border-b">Payment Date</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Payment Method</th>
                <th className="py-2 px-4 border-b">Booking Id</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment.id} className="hover:bg-gray-100 transition duration-300">
                  <td className="py-2 px-4 border-b">{payment.id}</td>
                  <td className="py-2 px-4 border-b">{payment.paymentDate}</td>
                  <td className="py-2 px-4 border-b">{payment.amount}</td>
                  <td className="py-2 px-4 border-b">{payment.paymentMethod}</td>
                  <td className="py-2 px-4 border-b">{payment.booking.id}</td>
                  <td className="py-2 px-4 border-b">
                    <button onClick={() => handleOpenModal(payment)} className="px-2 py-1 bg-yellow-500 text-white rounded-full mr-2 hover:bg-yellow-600 transition duration-300">Edit</button>
                    <button onClick={() => handleDelete(payment.id)} className="px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300">Delete</button>
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

export default Payment;
