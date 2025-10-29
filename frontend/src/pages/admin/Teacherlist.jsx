import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa"; // Importing icons
import Main from "../../components/main/Main";
import { useLocation } from "react-router-dom";

const Teacherlist = () => {
  const [stu, setAllStud] = useState([]);
 
  const url = useLocation();
  const cls = url.pathname.split("/")[3];
  const sec = url.pathname.split("/")[4];

  // const [expandedStudent, setExpandedStudent] = useState(null);
  const getallClass = async (cls, sec) => {
    console.log(">>>>>>", cls, sec);
    const res = await fetch(
      `http://localhost:5000/api/get-all-students/${cls}/${sec}`
    );
    const data = await res.json();
    console.log(data);
    setAllStud(data.students);
  };
  useEffect(() => {
    getallClass(cls, sec);
  }, [cls, sec]);
  const [attendanceData, setAttendanceData] = useState({});

  const handleAttendanceChange = (id, value,clas,section) => {
    console.log(clas,section)
    setAttendanceData((prev) => ({
      ...prev,
      [id]: value,
    class:clas,
    section:section,
    date:"2025-04-13"
    }));
  };
  console.log(attendanceData)

  const handleSubmit = async () => {
    const date = "2025-04-15";
    const data = Object.entries(attendanceData)
    console.log(data)
     // "
    // const attendanceArray = Object.entries(attendanceData).map(([id, status]) => ({
    //   _id: id,
    //   status,
    //   date
    // }));

    // const res = await fetch("http://localhost:5000/api/mark-attendance", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(attendanceArray)
    // });

    // const data = await res.json();
    // console.log("Attendance submitted:", data);
  };

 

  return (
    <Main>
      <div className="min-h-screen flex flex-col">
        <div className=" flex items-center justify-center py-2 px-1">
          <div className=" w-full bg-white shadow-md rounded-sm">
            <h2 className="text-xl text-center text-blue-600">
              Teacher List
            </h2>
            <div className="container  overflow-x-scroll w-[100%] p-2 rounded-sm">
            
              <table className="w-full">
                <thead className="bg-blue-800  text-white">
                  <tr>
                    <th className="px-4 py-2 text-sm font-medium">ID</th>
                    <th className="px-4 py-2 text-sm font-medium">Name</th>
                    <th className="px-4 py-2 text-sm font-medium">Grade</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    <th className="px-4 py-2 text-sm font-medium">Action</th>
                    
                  </tr>
                </thead>

                <tbody>
                  {stu?.map((cur) => (
                    <tr key={cur._id}>
                      <td>{cur.fname}</td>
                      <td>
                        <div className="flex gap-4 text-2xl">
                          Present:
                          <input
                            type="radio"
                            name={`att-${cur._id}`}
                            value="Present"
                            onChange={() =>
                              handleAttendanceChange(cur._id, "Present",cur.class,cur.section)
                            }
                          />
                          Absent:
                          <input
                            type="radio"
                            name={`att-${cur._id}`}
                            value="Absent"
                            onChange={() =>
                              handleAttendanceChange(cur._id, "Absent",cur.class,cur.section)
                            }
                          />
                          Leave:
                          <input
                            type="radio"
                            name={`att-${cur._id}`}
                            value="Leave"
                            onChange={() =>
                              handleAttendanceChange(cur._id, "Leave",cur.class,cur.section)
                            }
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

                {/* <button onClick={handleSubmit} className="bg-blue-900 text-white px-3 py-2 rounded-sm">Submit Attendance</button> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Teacherlist;
