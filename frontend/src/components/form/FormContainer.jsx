import React from "react";
import RegisterBtn from "../btn/registerbtn/RegisterBtn";

const FormContainer = ({ children, onSubmit,icon,title }) => {
  return (
    <form
      className="p-1"
      onSubmit={onSubmit}
    >
      {/* Section: School Info */}
      <div className="bg-gray-50 p-2 rounded-sm shadow-sm">
        <h2 className="text-lg font-bold text-slate-600 mb-4 flex items-center gap-2">
         {icon} {title}
        </h2>
        {children}
      </div>
         <RegisterBtn />

    
    </form>
  );
};

export default FormContainer;
