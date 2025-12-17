import React from "react";

const TableContainer = ({ children }) => {
  return (
    <div className="overflow-x-auto rounded-sm shadow-sm bg-white border border-gray-200 p-1">
      <table className="min-w-full  rounded overflow-hidden text-center">
       {children}
      </table>

      {/* Pagination Controls */}
    </div>
  );
};

export default TableContainer;
