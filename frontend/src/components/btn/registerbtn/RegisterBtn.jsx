import React from "react";

const RegisterBtn = () => {
  {
    /* Actions */
  }
  return (
    <div className="flex justify-start gap-4 pt-2 flex-wrap">
      <button
        type="button"
        className="px-8 py-3 bg-[#ffeecc] text-gray-700 rounded-sm hover:bg-[#f0ca7e] transition"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-8 py-3 bg-teal-600 text-white font-medium rounded-sm hover:bg-teal-500 transition"
      >
        Register
      </button>
    </div>
  );
};

export default RegisterBtn;
