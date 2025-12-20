import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../../layout/adminlayout/AdminLayout";

const AttendanceList = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/admin/attendance/mark-attendance-list/${id}`
    )
      .then((res) => res.json())
      .then(setData);
  }, [id]);

  return (
    <AdminLayout>
      <div className="p-4 overflow-x-auto">
        <table className="border-collapse border w-full text-center">
          <thead className="bg-black text-white">
            <tr>
              <th className="border p-2">Date</th>
              {data[0]?.attendanceArr.map((a) => (
                <th key={a.studentId._id} className="border p-2">
                  {a.studentId.fullName}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((day) => (
              <tr key={day._id}>
                <td className="border p-2">
                  {new Date(day.date).toLocaleDateString()}
                </td>

                {day.attendanceArr.map((a) => (
                  <td
                    key={a._id}
                    className={`border p-2 capitalize ${
                      a.status === "present"
                        ? "bg-green-200"
                        : a.status === "leave"
                        ? "bg-yellow-200"
                        : "bg-red-200"
                    }`}
                  >
                    {a.status}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AttendanceList;
