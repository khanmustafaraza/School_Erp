import AdminLayout from "../../../layout/adminlayout/AdminLayout";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaCalendarAlt, FaSchool, 
  FaStar, FaCheckCircle, FaMoneyBillWave, FaClipboardList 
} from "react-icons/fa";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const StudentDetail = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const school = {
    name: "Nora Mcmahon International School",
    board: "CBSE",
    affiCode: "AFFI-984562",
    email: "nacu@mailinator.com",
    contact: "152",
    address: "Deserunt nemo quisquam, New York, USA",
    school_photo: "iVBORw0KGgoAAAANSUhEUgAABaAAAAOECAYAAABXTZbSAAAAAXNSR0IArs4c6QAAAARnQU..."
  };

  const student = {
    fullName: "Brynne Sellers",
    fatherName: "Brandon Greene",
    phone: "+1 (143) 562-3907",
    dob: "15 Feb 1975",
    address: "Ut maxime fugiat ap, New York, USA",
    classId: { name: "I", section: "A" },
    academicYear: "2019",
    status: "Active",
    photo: "https://i.pravatar.cc/150?img=65",
    stats: {
      attendance: "95%",
      grades: "A+",
      feesPaid: "₹45,000",
      rewards: "3 Stars"
    },
    performance: [
      { month: "Jan", grade: 90 },
      { month: "Feb", grade: 92 },
      { month: "Mar", grade: 95 },
      { month: "Apr", grade: 97 },
      { month: "May", grade: 96 },
    ]
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-100 font-sans">
        
        {/* ================= SCHOOL HEADER ================= */}
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-lg overflow-hidden border border-white shadow-lg">
              <img
                src={`data:image/png;base64,${school.school_photo}`}
                alt="School"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">{school.name}</h1>
              <p className="text-sm opacity-80">{school.board}</p>
              <p className="text-sm opacity-80">Affiliation Code: {school.affiCode}</p>
              <div className="flex gap-6 text-sm opacity-80">
                <p className="flex items-center gap-1"><FaPhoneAlt /> {school.contact}</p>
                <p className="flex items-center gap-1"><FaEnvelope /> {school.email}</p>
              </div>
              <p className="text-sm flex items-center gap-1 opacity-80"><FaMapMarkerAlt /> {school.address}</p>
            </div>
          </div>
        </div>

        {/* ================= STUDENT PROFILE ================= */}
        <div className="max-w-7xl mx-auto px-8 py-10 space-y-8">

          {/* PROFILE HEADER */}
          <div className="relative bg-white shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:gap-8 border border-gray-200 hover:shadow-xl transition-shadow">
            
            {/* Student Photo */}
            <div className="absolute -top-16 left-8 w-32 h-32 md:relative md:top-0 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
              <img src={student.photo} alt="Student" className="w-full h-full object-cover"/>
            </div>

            {/* Student Info */}
            <div className="md:ml-40 mt-20 md:mt-0 flex-1 space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">{student.fullName}</h2>
              <p className="text-gray-600">Father: {student.fatherName}</p>
              <p className="text-gray-600">Class: {student.classId.name} - {student.classId.section}</p>
              <p className="text-gray-600">Academic Year: {student.academicYear}</p>
              <span className={`inline-block px-5 py-1 rounded-full text-white font-semibold ${student.status === "Active" ? "bg-green-500" : "bg-gray-400"}`}>
                {student.status}
              </span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 text-center mt-6 md:mt-0 md:ml-8">
              <StatCard icon={<FaCheckCircle />} label="Attendance" value={student.stats.attendance} color="bg-blue-600"/>
              <StatCard icon={<FaStar />} label="Grades" value={student.stats.grades} color="bg-yellow-400"/>
              <StatCard icon={<FaMoneyBillWave />} label="Fees Paid" value={student.stats.feesPaid} color="bg-green-600"/>
              <StatCard icon={<FaStar />} label="Rewards" value={student.stats.rewards} color="bg-purple-600"/>
            </div>
          </div>

          {/* TABS */}
          <div className="bg-white shadow-2xl rounded-3xl border border-gray-200 overflow-hidden">
            <div className="flex border-b border-gray-200 overflow-x-auto bg-gray-50">
              {["Profile", "Academic", "Fees", "Attendance"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium transition-colors whitespace-nowrap text-lg ${
                    activeTab === tab
                      ? "border-b-4 border-indigo-500 text-indigo-600 bg-white"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 min-h-[300px]">
              {activeTab === "Profile" && <ProfileTab student={student} />}
              {activeTab === "Academic" && <AcademicTab performance={student.performance} />}
              {activeTab === "Fees" && <div className="text-gray-500 text-center py-16">Fee Details Coming Soon...</div>}
              {activeTab === "Attendance" && <div className="text-gray-500 text-center py-16">Attendance Records Coming Soon...</div>}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

/* ================= FIELD COMPONENT ================= */
const ProfileField = ({ label, value, icon }) => (
  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="text-indigo-500 text-2xl">{icon}</div>
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="text-gray-900 font-medium mt-1 text-lg">{value}</p>
    </div>
  </div>
);

/* ================= STAT CARD ================= */
const StatCard = ({ icon, label, value, color }) => (
  <div className={`flex flex-col items-center justify-center p-4 rounded-xl text-white ${color} shadow-md hover:shadow-lg transition-shadow`}>
    <div className="text-2xl mb-2">{icon}</div>
    <p className="text-sm">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

/* ================= PROFILE TAB ================= */
const ProfileTab = ({ student }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ProfileField icon={<FaUser />} label="Full Name" value={student.fullName} />
    <ProfileField icon={<FaUser />} label="Father Name" value={student.fatherName} />
    <ProfileField icon={<FaPhoneAlt />} label="Phone" value={student.phone} />
    <ProfileField icon={<FaCalendarAlt />} label="Date of Birth" value={student.dob} />
    <ProfileField icon={<FaSchool />} label="Class" value={student.classId.name} />
    <ProfileField icon={<FaSchool />} label="Section" value={student.classId.section} />
    <ProfileField icon={<FaMapMarkerAlt />} label="Address" value={student.address} />
  </div>
);

/* ================= ACADEMIC TAB ================= */
const AcademicTab = ({ performance }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2"><FaClipboardList /> Performance Chart</h3>
    <div className="w-full h-64">
      <ResponsiveContainer>
        <LineChart data={performance} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[80, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="grade" stroke="#6366F1" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default StudentDetail;
