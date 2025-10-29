import React from "react";

const SelectBox = ({ curEle }) => {
  return (
    <select>
      <option value={curEle.sec ? curEle.sec : curEle.stream}>
        {curEle.class}
      </option>
    </select>
  );
};

export default SelectBox;
