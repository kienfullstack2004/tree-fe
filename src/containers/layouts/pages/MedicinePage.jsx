import React, { useEffect, useState } from "react";
import ha from "../../../assets/images/ba.jpg";
import { NavLink } from "react-router-dom";
import { apiGetAllMedicine } from "../../../Service/apiMedicine";
import moment from "moment";

const MedicinePage = () => {
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const fetchMedicine = async () => {
      const res = await apiGetAllMedicine();
      res?.data?.err === 0 && setMedicine(res?.data?.data);
    };
    fetchMedicine();
  }, []);

  return (
    <div className="mt-[150px] min-lg:w-[1200px] m-auto">
      <div className="min-lg:grid-cols-3 max-lg:p-5 gap-2  min-lg:grid max-md:flex ">
        {medicine?.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={"hover:cursor-pointer"}
              to={`/medicine/${item?.id}`}
            >
              <div className="flex flex-col gap-2">
                <div>
                  <img
                    src={item?.imageMedicine}
                    className="w-full h-[300px] rounded-md object-cover"
                    alt="logo"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-extralight font-mono text-justify ">
                    {item?.nameMedicine}
                  </h1>
                  <div>
                    <p className="text-[14px] text-end  text-[#ccc]">{moment(item?.createAt).format('LLLL','vi')}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MedicinePage;
