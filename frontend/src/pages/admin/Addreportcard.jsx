import React, { useState } from 'react';
import { FaUser, FaIdCard, FaEdit, FaBook, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';

const ReportCard = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    grade: '',
    subjects: [
      { name: 'Mathematics', ut1: '', ut2: '', ut3: '', halfYearly: '', finalExam: '' },
      { name: 'Science', ut1: '', ut2: '', ut3: '', halfYearly: '', finalExam: '' },
      { name: 'English', ut1: '', ut2: '', ut3: '', halfYearly: '', finalExam: '' },
      { name: 'Social Studies', ut1: '', ut2: '', ut3: '', halfYearly: '', finalExam: '' },
      { name: 'Physical Education', ut1: '', ut2: '', ut3: '', halfYearly: '', finalExam: '' },
    ],
    totalMarks: '',
    percentage: '',
    remarks: '',
  });

  const handleChange = (e, index, field) => {
    const { value } = e.target;
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index][field] = value;
    setFormData({
      ...formData,
      subjects: updatedSubjects,
    });
  };

  const calculateTotalMarks = () => {
    const total = formData.subjects.reduce((sum, subject) => {
      return sum + parseInt(subject.ut1 || 0) + parseInt(subject.ut2 || 0) + parseInt(subject.ut3 || 0) +
        parseInt(subject.halfYearly || 0) + parseInt(subject.finalExam || 0);
    }, 0);
    setFormData({
      ...formData,
      totalMarks: total,
      percentage: ((total / 2500) * 100).toFixed(2), // 5 subjects * 5 exams = 25 total marks per subject, 2500 total
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotalMarks();
    if (formData.studentName && formData.studentId && formData.grade && formData.totalMarks !== '') {
      alert('Report Card Submitted Successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container mx-auto p-6 mt-8 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 text-teal-600">
        <FaBook className="inline-block mr-2" /> Report Card
      </h1>
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Student Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center">
            <FaUser className="text-teal-600 mr-2" />
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              placeholder="Student Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex items-center">
            <FaIdCard className="text-teal-600 mr-2" />
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              placeholder="Student ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex items-center">
            <FaEdit className="text-teal-600 mr-2" />
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              placeholder="Grade"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex items-center">
            <FaChalkboardTeacher className="text-teal-600 mr-2" />
            <textarea
              id="remarks"
              name="remarks"
              value={formData.remarks}
              onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
              placeholder="Remarks"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Subject Marks Section */}
        <div className="my-8">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4">
            <FaBook className="inline-block mr-2" /> Subject Marks
          </h3>
          {formData.subjects.map((subject, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
              <div className="col-span-2">
                <label className="text-sm text-gray-700 font-medium">{subject.name}</label>
              </div>
              {['ut1', 'ut2', 'ut3', 'halfYearly', 'finalExam'].map((exam, examIndex) => (
                <div key={examIndex} className="flex flex-col">
                  <label className="text-xs text-gray-600">{exam.toUpperCase()}</label>
                  <input
                    type="number"
                    name={exam}
                    value={subject[exam]}
                    onChange={(e) => handleChange(e, index, exam)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    min="0"
                    max="100"
                    required
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Submit Section */}
        <div className="my-6">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-3 rounded-md hover:bg-teal-700 transition-all duration-200 flex items-center justify-center"
          >
            <FaCheckCircle className="mr-2" />
            Calculate & Submit Report Card
          </button>
        </div>

        {/* Total Marks and Percentage */}
        <div className="mt-6 text-center">
          <h4 className="text-xl font-semibold">Total Marks: {formData.totalMarks} / 2500</h4>
          <h4 className="text-xl font-semibold">Percentage: {formData.percentage} %</h4>
        </div>
      </form>
    </div>
  );
};

export default ReportCard;
