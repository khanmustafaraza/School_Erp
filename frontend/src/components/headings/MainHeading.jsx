import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainHeading = ({icon,title,subTitle,path}) => {
  const navigate = useNavigate()
  return (
      <div className=" bg-[#ffeecc] p-1 flex justify-between items-center flex-wrap">
            <div className="flex items-center gap-3">
             {icon}
              <div>
                <h1
                  className="text-sm lg:text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "cursive" }}
                >
               {title}
                </h1>
                <p className="text-gray-600 text-sm font-bold">
                 {subTitle}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate(`${path}`)}
                className=" px-4 py-1 lg:px-5  lg:py-3 bg-teal-600 text-white font-medium rounded-sm hover:bg-teal-500 transition"
              >
                School Management
              </button>
            </div>
          </div>
  )
}

export default MainHeading