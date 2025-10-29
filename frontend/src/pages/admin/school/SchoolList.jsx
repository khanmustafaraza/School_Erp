import React from "react";
import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { NavLink } from "react-router-dom";

const SchoolList = () => {
  // Example static data — replace with real API data
  const schools = [
    { id: 1, name: "Green Valley Public School", affiliation: "123456", phone: "9876543210", email: "greenvalley@gmail.com" },
    { id: 2, name: "Sunrise International", affiliation: "654321", phone: "8765432109", email: "sunriseint@gmail.com" },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="material-icons text-blue-600">school</span>
            School List
          </h2>
          <button className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
           <NavLink to="/admin/school-register">
             <span className="material-icons text-sm">add</span>
            Add School
           </NavLink>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Affiliation No</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school, index) => (
                <tr key={school.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <span className="material-icons text-gray-500">apartment</span>
                    {school.name}
                  </td>
                  <td className="px-4 py-2">{school.affiliation}</td>
                  <td className="px-4 py-2">{school.phone}</td>
                  <td className="px-4 py-2">{school.email}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                      <span className="material-icons text-sm">edit</span>
                      Edit
                    </button>
                    <button className="flex items-center gap-1 text-red-600 hover:text-red-800">
                      <span className="material-icons text-sm">delete</span>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SchoolList;
