import React from "react";

const Input = ({
  icon,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  iconType,
}) => {
  return (
    <div className="mb-4">
      {/* Label */}
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      {/* Icon + Input in one row */}
      <div className="flex items-center border border-gray-400 rounded-sm px-2">
        {iconType == "react" ? (
          <span className="mr-2 text-gray-500 text-xl"> {icon}</span>
        ) : (
          <span className="material-icons text-gray-500 mr-2">{icon}</span>
        )}

        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          className="w-full outline-none border-none"
        />
      </div>
    </div>
  );
};

export default Input;
