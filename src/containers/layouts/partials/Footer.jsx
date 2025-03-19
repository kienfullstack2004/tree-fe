import React from "react";
import { NavLink} from "react-router-dom";
import Input from "../../components/Input";
import { ButtonBtn } from "../../components";
import { icons } from "../../../utils/icons";
import emailjs from "@emailjs/browser";

const { IoSend } = icons;

const Footer = () => {

  const handdleSend = (e) => {
      e.preventDefault();
      // alert('Hello')
      emailjs.sendForm("service_0vfekc9","template_79rwpvj",e.target,"ZsnYH_J_vw7MZsuIw")
      .then((res)=>{
        return res.text;  
      }) 
  }


  return (
    <div className="mt-2">
      <div className="min-lg:w-[900px] max-md:w-full min-xl:w-[1200px] max-lg:block max-lg:p-5 min-lg:flex max-md:block max-md:p-5 gap-6 mt-6 m-auto">
        <div>
          <a href="#" className="p-4 pb-2 border-b-2 border-[#000]">STORE TREE</a>
          <ul className="flex flex-col gap-3 mt-10">
            <li>
              <NavLink to={"/"}>Trang chu</NavLink>
            </li>
            <li>
              <NavLink to={"/sanpham"}>Trang san phan</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="pb-2 border-b-2 border-[#000]">Loai Cay</h2>
          <ul className="flex flex-col gap-3 mt-10">
            <li>
              <NavLink to={"/"}>Cay canh</NavLink>
            </li>
            <li>
              <NavLink to={"/sanpham"}>Cay thuoc</NavLink>
            </li>
            <li>
              <NavLink to={"/sanpham"}>Tin tuc</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-2.5 items-center justify-center mt-6">
          
          <form  onSubmit={handdleSend}>
           <Input
            classStyle={"p-4 border rounded-md w-[300px] outline-none"}
            placeholderText={"Nhap email cua ban vao day ... "}
            name={'email'} 
           />
           {<textarea cols={40} rows={10} placeholder="Nhap noi dung" name="message">    
            </textarea>}
          <input type="submit" value={"Submit"} />
  
          </form>

        </div>
        <div className="py-2 px-5 flex items-center rounded-md  bg-pink-400 text-white justify-centerrounded-md">
          <p className="text-justify">
            Cửa hàng bán cây cảnh rất vui được gửi đến khách hàng <br/>những thông
            tin mới nhất về các loại cây{" "}
          </p>
        </div>
      </div>
      <p className="text-center italic text-[18px] my-6 pb-20">
        Copyright by Nguyen Trung Kien 2025
      </p>
    </div>
  );
};

export default Footer;
