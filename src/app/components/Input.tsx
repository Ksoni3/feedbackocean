import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col w-[90%]">
      <label> Title </label>

      <input
        type="text"
        placeholder="Enter your query"
        className="p-3 rounded-md"
      />
    </div>
  );
};

export default Input;
