import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import AdminLayout from "../../layout/adminlayout/AdminLayout";
import PageUrl from "../../components/pageurl/PageUrl";
import MainHeading from "../../components/headings/MainHeading";
import usePage from "../../store/pagelocationcontext/PageLocationContext";
import useAdminStudent from "../../store/admincontext/adminstudentcontext/AdminStudentContext";
import TableContainer from "../../components/table/TableContainer";

const AttendanceRegister = () => {
  const { handlePageUrl, pageUrl } = usePage();
  const { getStudentsByClass, state } = useAdminStudent();
  const { id } = useParams();

  const [attendanceDate, setAttendanceDate] = useState(new Date());
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    handlePageUrl();
    if (id) getStudentsByClass(id);
  }, [id]);

  // ✅ Default all students as "present"
  useEffect(() => {
    if (state?.classStudentList?.length) {
      const initial = {};
      state.classStudentList.forEach((s) => {
        initial[s._id] = "present";
      });
      setAttendance(initial);
    }
  }, [state?.classStudentList]);

  const handleAttendanceChange = (e, studentId) => {
    const { value } = e.target;

    setAttendance((prev) => ({
      ...prev,
      [studentId]: value,
    }));
  };

  // ✅ Submit handler
  const handleSubmit = async () => {
    const attendanceArr = Object.entries(attendance).map(
      ([studentId, status]) => ({
        studentId,
        status,
      })
    );

    const payload = {
      classId: id,
      date: attendanceDate,
      attendanceArr,
    };
    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/attendance/mark-attendance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      console.log(data);

      if (data.success) {
        // dispatch({
        //   type: "GET_CLASS_LIST",
        //   payload: data.data,
        // });
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }

    console.log("FINAL PAYLOAD 👉", payload);
    // axios.post("/api/attendance", payload);
  };

  return (
    <AdminLayout>
      <div className="p-4 space-y-4">
        <PageUrl pageUrl={pageUrl} />

        <MainHeading
          title="Attendance Register"
          btnTitle="View Attendance"
          path="/admin/attendance-management"
        />

        {/* ================= FILTER BAR ================= */}
        <div className="bg-white border rounded-lg p-4 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Attendance Date</p>
            <DatePicker
              selected={attendanceDate}
              onChange={setAttendanceDate}
              maxDate={new Date()}
              dateFormat="dd MMM yyyy"
              className="border rounded-md px-3 py-2 text-sm w-48"
            />
          </div>

          <div className="text-sm text-gray-600">
            Total Students:{" "}
            <span className="font-semibold">
              {state?.classStudentList?.length || 0}
            </span>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800"
          >
            Submit Attendance
          </button>
        </div>

        {/* ================= STUDENT LIST ================= */}
        <div className="bg-white border rounded-lg overflow-hidden">
          <TableContainer>
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-3 text-xs uppercase">#</th>
                <th className="px-4 py-3 text-xs uppercase">Full Name</th>
                <th className="px-4 py-3 text-xs uppercase">Class</th>
                <th className="px-4 py-3 text-xs uppercase">Section</th>
                <th className="px-4 py-3 text-xs uppercase text-center">
                  Attendance
                </th>
              </tr>
            </thead>

            <tbody>
              {state?.classStudentList?.map((s, index) => (
                <tr key={s._id} className="bg-gray-100 hover:bg-gray-200">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">{s?.fullName}</td>
                  <td className="px-4 py-3">{s?.classId?.name}</td>
                  <td className="px-4 py-3">{s?.classId?.section}</td>

                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-4">
                      {/* PRESENT */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`attendance-${s._id}`}
                          value="present"
                          checked={attendance[s._id] === "present"}
                          onChange={(e) => handleAttendanceChange(e, s._id)}
                        />
                        Present
                      </label>

                      {/* ABSENT */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`attendance-${s._id}`}
                          value="absent"
                          checked={attendance[s._id] === "absent"}
                          onChange={(e) => handleAttendanceChange(e, s._id)}
                        />
                        Absent
                      </label>

                      {/* LEAVE */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`attendance-${s._id}`}
                          value="leave"
                          checked={attendance[s._id] === "leave"}
                          onChange={(e) => handleAttendanceChange(e, s._id)}
                        />
                        Leave
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableContainer>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AttendanceRegister;
