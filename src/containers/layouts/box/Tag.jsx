import React from "react";
import { NavLink } from "react-router-dom";

const Tag = ({ title, arr }) => {
  return (
    <div className="p-5 rounded-md bg-gray-300">
      <h1 className="text-center font-bold">{title}</h1>
      <ul className="flex items-center justify-center">
        {arr.map((item) => {
          return (
            <NavLink key={item} to={item.link}>
              <li className="hover:cursor-pointer hover:text-blue-500 my-3 border-b-2 border-gray-600">{item.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Tag;
