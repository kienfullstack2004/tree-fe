import React, { useState } from "react";
import h1 from "../../../assets/images/background.jpg";
import { ButtonBtn } from "../../components";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { apiLoginService, apiRegietrService } from "../../../Service/apiAuth";
import { useEffect } from "react";
import { getOneUserCurrent } from "../../../store/action/user";
// import

const Home = () => {
  const [payload, setPayload] = useState({ username: "", phone: "", pass: "" });
  const navigator = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [isRegister, setRegister] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn && dispatch(getOneUserCurrent());
  }, [isLoggedIn]);

  const handdleSubmit = () => {
    if (!isRegister) {
      if (payload.phone !== "" && payload.pass !== "") {
        dispatch(login(payload));
        const fecthLogin = async () => {
          const responsive = await apiLoginService(payload);
          responsive?.data?.err === 0 && toast.success("Dang ky thanh cong");
          responsive?.data?.err === 0 && navigator("/caycanh");
          responsive?.data?.err === 0 && location.reload();
        };
        fecthLogin();
      } else {
        toast.error("Vui long nhap day du thong tin !");
      }
    } else {
      if (
        payload.phone !== "" &&
        payload.username !== "" &&
        payload.pass !== ""
      ) {
        const fectRegister = async () => {
          const responsive = await apiRegietrService(payload);
          responsive?.data?.err === 0 && toast.success("Dang ky thanh cong");
          console.log(responsive);
          responsive?.data?.err === 1 &&
            toast.error("Dang ky khong thanh cong");
          responsive?.data?.err === 0 && setRegister(!isRegister);
        };
        fectRegister();
      } else {
        toast.error("Vui long nhap day du thong tin de ddang ky");
      }
    }
  };

  const handdleChange = () => {
    setRegister(!isRegister);
  };

  return (
    <div className={`w-full h-[100vh] max-sm:h-full image flex items-center justify-center`}>
      {!isLoggedIn ? (
        <div className="max-md:w-full max-lg:p-5 min-lg:flex max-md:block max-md:text-center gap-2 items-center max-xl:w-[900px]  w-[1200px] m-auto justify-between">
          <div className="max-md:p-5">
            <h1 className="text-[35px] max-lg:text-center text-white">
              STORE & DISCOVER <br />
              TYPE TREE
            </h1>
            <p className="text-justify max-lg:text-center text-[18px] text-white">
              Đây là trang web khám phá và mua bán các loại <br />
              cây cảnh uy tín nhất việt nam
            </p>
            <div className="min-lg:text-center">
              <div className="max-lg:flex min-xl:block min-xl:text-start justify-center items-center">
                <ButtonBtn
                  textBtn={"Khám phá"}
                  onClick={() => navigator("/caycanh")}
                  classBtn={
                    "p-3 my-4  hover:bg-blue-300 hover:cursor-pointer bg-blue-500 rounded-md text-white outline-none"
                  }
                />
              </div>
            </div>
          </div>
          {!isLoggedIn && (
            <div className="max-lg:p-5">
              <div className="bg-white/60 max-md:flex max-sm:flex-col min-lg:items-center justify-center  max-md:w-full max-md:p-4 min-xl:w-[300px] shadow-2xl py-5 px-4 rounded-md">
                <h1 className="text-[25px] font-bold text-center">
                  {isRegister ? "Đăng ký" : "Dang nhap"}
                </h1>
                <div>
                  {isRegister && (
                    <Input
                      textLable={"Họ và tên"}
                      classLable={"text-[12px] my-2 max-md:text-start"}
                      placeholderText={"Nhập họ và tên của bạn ..."}
                      value={payload.username}
                      setValue={setPayload}
                      type={"username"}
                      classStyle={
                        "p-3 outline-none rounded-md border border-1-[#ccc] w-full"
                      }
                    />
                  )}
                  <Input
                    textLable={"Số điện thoại"}
                    classLable={"text-[12px] my-2 max-md:text-start"}
                    placeholderText={"Nhập số điện của bạn ..."}
                    type={"phone"}
                    value={payload.phone}
                    setValue={setPayload}
                    classStyle={
                      "p-3 outline-none rounded-md border border-1-[#ccc] w-full"
                    }
                  />
                  <Input
                    textLable={"Mật khẩu"}
                    classLable={"text-[12px] my-2 max-md:text-start"}
                    placeholderText={"Nhập mật khẩu của bạn ..."}
                    type={"pass"}
                    value={payload.pass}
                    setValue={setPayload}
                    classStyle={
                      "p-3 outline-none rounded-md border border-1-[#ccc] w-full"
                    }
                  />
                </div>
                <ButtonBtn
                  textBtn={isRegister ? "Đăng ký" : "Danh nhap"}
                  classBtn={
                    "w-full rounded-md hover:bg-blue-300 hover:cursor-pointer p-3 my-4 bg-blue-500 text-white font-bold"
                  }
                  onClick={handdleSubmit}
                />
                <p className="flex gap-2 text-[12px] items-center justify-center italic">
                  Bạn {isRegister ? "đã" : "chưa"} có tài khoản ?{" "}
                  <p
                    onClick={handdleChange}
                    className="text-blue-400 font-medium"
                  >
                    {isRegister ? "đăng nhập" : "đăng ký ngay"}
                  </p>
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="absolute top-[50%] left-[30%] flex max-lg:flex-col items-center m-auto min-lg:block  justify-between">
          <div>
            <h1 className="text-[50px] text-center text-white">
              STORE & DISCOVER TYPE TREE
            </h1>
            <p className=" text-[14px] text-center text-white">
              Đây là trang web khám phá và mua bán các loại cây cảnh uy tín nhất
              việt nam
            </p>
            <div className="flex items-center justify-center">
              {" "}
              <ButtonBtn
                textBtn={"Khám phá"}
                onClick={() => navigator("/caycanh")}
                classBtn={
                  "p-3 my-4 hover:bg-blue-300 hover:cursor-pointer bg-blue-500 rounded-md text-white outline-none"
                }
              />
            </div>
          </div>
          {!isLoggedIn && (
            <div className="max-xl:hidden">
              <div className="bg-white/60 w-[300px]  shadow-2xl py-5 px-4 rounded-md">
                <h1 className="text-[25px] font-bold text-center">
                  {isRegister ? "Đăng ký" : "Đăng nhập"}
                </h1>
                <div>
                  {isRegister && (
                    <Input
                      textLable={"Họ và tên"}
                      classLable={"text-[12px] my-2"}
                      placeholderText={"Nhập họ và tên của bạn ..."}
                      value={payload.username}
                      setValue={setPayload}
                      type={"username"}
                      classStyle={
                        "p-3 outline-none rounded-md border border-1-[#ccc] w-full"
                      }
                    />
                  )}
                  <Input
                    textLable={"Số điện thoại"}
                    classLable={"text-[12px] my-2"}
                    placeholderText={"Nhập số điện của bạn ..."}
                    type={"phone"}
                    value={payload.phone}
                    setValue={setPayload}
                    classStyle={
                      "p-3 outline-none rounded-md border border-1-[#ccc] w-full"
                    }
                  />
                  <Input
                    textLable={"Mật khẩu"}
                    classLable={"text-[12px] my-2"}
                    placeholderText={"Nhập mật khẩu của bạn ..."}
                    type={"pass"}
                    value={payload.pass}
                    setValue={setPayload}
                    classStyle={
                      "p-3 outline-none rounded-md border border-1-[#ccc] w-full"
                    }
                  />
                </div>
                <ButtonBtn
                  textBtn={isRegister ? "Đăng ký" : "Danh nhap"}
                  classBtn={
                    "w-full rounded-md hover:bg-blue-300 hover:cursor-pointer p-3 my-4 bg-blue-500 text-white font-bold"
                  }
                  onClick={handdleSubmit}
                />
                <div className="flex gap-2 text-[12px] items-center justify-center italic">
                  Bạn {isRegister ? "đã" : "chưa"} có tài khoản ?
                  <p
                    onClick={handdleChange}
                    className="text-blue-400 font-medium"
                  >
                    {isRegister ? "đăng nhập" : "đăng ký ngay"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
