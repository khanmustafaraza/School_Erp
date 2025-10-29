import React from 'react'
import { HiOutlineChartBar } from "react-icons/hi";
import { FaUserAlt, FaChalkboardTeacher, FaRegCalendarCheck } from "react-icons/fa";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    PieChart,
    Pie,
  } from "recharts";
  
  // Example data for charts
  
const Recharts = () => {
    const performanceData = [
        { month: "Jan", performance: 80 },
        { month: "Feb", performance: 85 },
        { month: "Mar", performance: 90 },
        { month: "Apr", performance: 95 },
        { month: "May", performance: 93 },
        { month: "Jun", performance: 88 },
      ];
      
      const classData = [
        { name: "Math", students: 40 },
        { name: "Science", students: 30 },
        { name: "History", students: 25 },
        { name: "Art", students: 15 },
        { name: "Music", students: 10 },
      ];
      
      // Pie chart data for a more eye-catching element
      const pieData = [
        { name: "Math", value: 40 },
        { name: "Science", value: 30 },
        { name: "History", value: 25 },
        { name: "Art", value: 15 },
      ];
    
  return (
      <div className="flex justify-between gap-8 mb-2 flex-wrap">
      {/* School Performance (LineChart) */}
      <div className="flex-1 p-1  shadow-lg border border-gray-200 bg-white">
        <h2 className="text-2xl  text-gray-800 mb-6 flex items-center space-x-3">
          {/* <HiOutlineChartBar className="text-xl text-gray-700" /> */}
          <span>School Performance</span>
        </h2>
        <div className="w-full h-80 mb-5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="performance"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-gray-500">
          Visualizing performance metrics over the past semester.
        </div>
      </div>

      {/* Class Distribution (BarChart) */}
      <div className="flex-1 p-1 shadow-lg border border-gray-200 bg-white">
        <h2 className="text-2xl  text-gray-800 mb-6 flex items-center space-x-3">
          <FaRegCalendarCheck className="text-xl text-gray-700" />
          <span>Class Distribution</span>
        </h2>
        <div className="w-full h-80 mb-5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={classData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" fill="#82ca9d" animationDuration={1000}>
                {classData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.students > 30 ? "#00c3e8" : "#8884d8"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-gray-500">
          Visualizing the number of students per class.
        </div>
      </div>

      {/* Performance Pie Chart */}
      <div className="flex-1 p-1  shadow-lg border border-gray-200 bg-white">
        <h2 className="text-2xl  text-gray-800 mb-6 flex items-center space-x-3">
          <HiOutlineChartBar className="text-xl text-gray-700" />
          <span>Class Performance Distribution</span>
        </h2>
        <div className="w-full h-80 mb-5">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-gray-500">
          See the percentage distribution of students in each class.
        </div>
      </div>
    </div>
  )
}

export default Recharts