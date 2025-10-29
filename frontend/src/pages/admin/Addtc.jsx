import React, { useState } from 'react';

const TCForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    dob: '',
    grade: '',
    fatherName: '',
    motherName: '',
    transferDate: '',
    reasonForTransfer: '',
    contactEmail: '',
    schoolName: '',
    principalName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.studentName &&
      formData.studentId &&
      formData.dob &&
      formData.grade &&
      formData.fatherName &&
      formData.motherName &&
      formData.transferDate &&
      formData.reasonForTransfer &&
      formData.contactEmail &&
      formData.schoolName &&
      formData.principalName
    ) {
      alert('Transfer Certificate Form Submitted Successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container mx-auto p-6 shadow-md mt-8 rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">Transfer Certificate (TC) Form</h1>
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">Student ID</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">Father's Name</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">Mother's Name</label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="transferDate" className="block text-sm font-medium text-gray-700">Transfer Date</label>
            <input
              type="date"
              id="transferDate"
              name="transferDate"
              value={formData.transferDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="reasonForTransfer" className="block text-sm font-medium text-gray-700">Reason for Transfer</label>
            <textarea
              id="reasonForTransfer"
              name="reasonForTransfer"
              value={formData.reasonForTransfer}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Contact Email</label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">School Name</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="principalName" className="block text-sm font-medium text-gray-700">Principal's Name</label>
            <input
              type="text"
              id="principalName"
              name="principalName"
              value={formData.principalName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white font-semibold py-2 rounded-lg hover:bg-teal-700 transition-all duration-200 mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TCForm;
