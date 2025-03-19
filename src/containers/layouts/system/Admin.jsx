import React from "react";
import { icons } from "../../../utils/icons";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const { BiSolidFoodMenu } = icons;

const active =
  "p-5 text-blue-500 border-l-3 border-b-2-white text-blue-400 border-l-blue-700";
const notActive =
  "p-5 text-white hover:text-blue-400 hover:border-l-blue-700 hover:border-l-3 border-b-2-white";
const sidebar = [
  {
    name: "Quản lý bài viết cây cảnh",
    link: "",
  },
  {
    name: "Quản lý tài khoản",
    link: "quanlytaikhoan",
  },
  {
    name: "Quản lý bài viết cây thuốc",
    link: "quanlycaythuoc",
  },
  {
    name: "Quản lý bài viết",
    link: "quanlybaiviet",
  },
];

const Admin = () => {
  const { pathname } = useLocation();

  const { isLoggedIn } = useSelector((state) => state.auth);

  let act = pathname.split("/")[2];

  if (act === undefined) {
    act = "";
  }

  if (!isLoggedIn) return <Navigate replace={true} to={"/"}></Navigate>;
  return (
    <div className="flex bg-[#363636]">
      <div className="w-[20%] bg-[]">
        <div className="flex gap-2 items-center p-5 text-white">
          <BiSolidFoodMenu size={20} color="#fff" />
          <h3 className="font-bold">Admin</h3>
        </div>
        <div className="mt-6">
          <ul className="">
            {sidebar.map((item, index) => {
              return (
                <li key={index} className="p-5">
                  <NavLink
                    className={act === item?.link ? active : notActive}
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
