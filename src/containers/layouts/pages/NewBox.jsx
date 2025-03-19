import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

const NewBox = ({ item }) => {
  return (
    <NavLink to={`/news/${item?.id}`}>
        <div className="flex gap-6 max-lg:mx-5 my-5">
      <div>
        <img src={item?.image} className="w-[500px] h-[200px] rounded-md" alt="logo" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-[20px] text-justify">{item?.title}</h4>
          <div className="text-extranlight text-[12px] text-justify">
            {item?.detail}
          </div>
        </div>
        <div className="text-end text-[12px] text-[#ccc]">
          {moment(item?.createdAt).format('LLL','vi')}
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default NewBox;
