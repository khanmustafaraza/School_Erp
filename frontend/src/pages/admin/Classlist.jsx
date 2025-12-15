import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa"; // Importing icons
import { PiStudentBold } from "react-icons/pi";
import Main from "../../components/main/Main";
import { ColorRing } from "react-loader-spinner";
import { SiGoogleclassroom } from "react-icons/si";
import { useClassRegister } from "../../context/class";
import { Link } from "react-router-dom";

const Classlist = () => {
  const { state, getAllClassFun } = useClassRegister();
  useEffect(() => {
    getAllClassFun();
  }, []);
  // console.log("get all class", state.allClasses);

  return (
    <Main>
      <div className="min-h-screen flex flex-col text-gray-800">
        <div className="min-h-screen  py-6 px-4 sm:px-8 lg:px-12 bg-gray-100">
          <div className="flex justify-center items-center">
            {/* {loading ? (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            ) : null} */}
          </div>
          <h2 className="text-xl sm:text-3xl font-bold text-center text-indigo-400">
            ALL Class List & Section
          </h2>
          <div className=" flex flex-wrap justify-center items-center gap-6 ">
            {state.allClasses?.map((curEle) => {
              console.log(curEle)
              return (
               <Link to ={`/admindashboard/studentlist/${curEle.classname}/${curEle.section}`}>
                <div className="bg-white w-[250px] h-[150px] rounded shadow flex justify-center items-center flex-col gap-6 text-xl ">
                  <div className="text-4xl text-red-600">
                    <PiStudentBold />
                  </div>
                  <div>
                  
                    Class:-<strong className="uppercase">{curEle.classname}</strong>
                  </div>
                  <div>
                  
                    Section:-
                    <strong className="uppercase">{curEle.section}</strong>
                  </div>
                </div>
               </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Classlist;
