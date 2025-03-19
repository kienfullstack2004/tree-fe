import React, { useEffect } from "react";
import { icons } from "../../../utils/icons";
import Input from "../../components/Input";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ba from "../../../assets/images/ba.jpg";
import userImg from "../../../assets/images/user.jpg";
import { useState } from "react";
import { logout } from "../../../store/action/auth";
import { getOneUserCurrent, searchData } from "../../../store/action/user";
import { apiGetCurrentUser } from "../../../Service/apiUser";
import { FaUserGear } from "react-icons/fa6";
import { ButtonBtn, InputForm } from "../../components";
import { apiUpdateService } from "../../../Service/apiAuth";
import { toast } from "react-toastify";
import { apiImageCloundinary } from "../../../Service/apiPost";
import { publicHeader, privateHeadder } from "../../../utils/path";

const { FaSearch, IoIosLogOut, IoIosClose } = icons;

let active = "";
const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  // const {userData} =  useSelector(state => state.user);

  const [isBell, setBell] = useState(false);

  const { pathname } = useLocation();

  let hash = pathname.split("/")[1];

  const [user, setUser] = useState({
    avatar: userImg,
    username: "",
    phone: "",
    id: "",
  });

  const [userUpdate, setUserUpdate] = useState({
    avatar: userImg,
    username: "",
    phone: "",
    id: "",
  });

  //  useEffect(()=>{
  //    setUser(userData);
  //  },[pathname])

  useEffect(() => {
    const fectchUser = async () => {
      const responsive = await apiGetCurrentUser();
      const userApi = responsive?.data?.user;

      responsive?.data?.err === 0 &&
        setUser({
          avatar: userApi.avatar ? userApi.avatar : userImg,
          username: userApi.username,
          phone: userApi.phone,
          id: userApi.id,
        });

      responsive?.data?.err === 0 &&
        setUserUpdate({
          avatar: userApi.avatar ? userApi.avatar : userImg,
          username: userApi.username,
          phone: userApi.phone,
          id: userApi.id,
        });
    };
    fectchUser();
  }, [pathname]);

  const [setting, setSetting] = useState(false);

  if (
    pathname == "/caycanh" ||
    pathname == "/caythuoc" ||
    pathname == "/news" ||
    pathname == "/search" ||
    pathname == "/about" ||
    pathname == "/support" ||
    hash == "detail" ||
    hash == "medicine" ||
    hash == "news" ||
    hash == "search"
  ) {
    active = "bg-black text-white";
  } else {
    active = "text-white";
  }

  const [search, setSearch] = useState("");
  const [close, setClose] = useState(false);

  const handleBell = () => {
    setBell(!isBell);
  };

  // useEffect(()=>{
  //    setUserUpdate(userData)
  // },[])

  useEffect(() => {
    if (search !== "") {
      setClose(true);
    } else {
      setClose(false);
    }
  }, [search]);

  const handleColose = () => {
    setSearch("");
    setClose(!close);
  };
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleSearch = () => {
    if (search !== "") {
      dispatch(searchData(search));
      navigator(`/search/${search}`);
    } else {
      // ..
    }
  };

  const handdleUpdate = async () => {
    if (
      userUpdate.username !== "" &&
      userUpdate.phone !== "" &&
      userUpdate.avatar !== "" &&
      userUpdate.id !== ""
    ) {
      const image = userUpdate.avatar;
      const formData = new FormData();

      formData.append("file", image);
      formData.append("upload_preset", "tree_preset");
      formData.append("cloud_name", "dp6cr7ea5");

      // const responsive = await apiImageCloundinary(image);

      const img = await fetch(
        "https://api.cloudinary.com/v1_1/dp6cr7ea5/image/upload",
        {
          method: "post",
          body: formData,
        }
      );

      const res = await img.json();

      const fectchUpdate = async () => {
        const responsive = await apiUpdateService({
          id: userUpdate.id,
          phone: userUpdate.phone,
          username: userUpdate.username,
          avatar: res.secure_url,
        });

        responsive?.data?.err === 0 && toast.success("Cập nhật thành công !");
        responsive?.data?.err === 0 && location.reload();
        responsive?.data?.err === 0 && setUser(userUpdate);
      };
      fectchUpdate();
    } else {
      //
    }
  };

  return (
    <div
      className={`${active} max-lg:flex max-sm:items-center p-5 h-[90px] max-sm:hidden fixed top-0 right-0 left-0 z-30 items-center`}
    >
      <div className="min-xl:w-[1200px] max-lg:w-[900px] min-md:flex max-sm:px-3 justify-between m-auto ">
        <div className="md:flex items-center gap-5">
          <a href="/" className="font-bold text-[30px]">
            STORETREE
          </a>
          <ul className="md:flex">
            {isLoggedIn
              ? publicHeader.map((item, index) => {
                  return (
                    <li key={index} className="">
                      <NavLink to={item?.path} className="p-5">
                        {item?.component}
                      </NavLink>
                    </li>
                  );
                })
              : privateHeadder?.map((item, index) => {
                  return (
                    <li className="" key={index}>
                      <NavLink to={item?.path} className="p-5">
                        {item?.component}
                      </NavLink>
                    </li>
                  );
                })}
          </ul>
        </div>
        {isLoggedIn ? (
          <div
            className={`${active} hover:cursor-pointer relative flex items-center justify-between`}
          >
            <div onClick={handleBell} className="text-[16px]">
              Hi, {user.username}
            </div>

            {isBell && (
              <div className="absolute top-[40px] right-0 flex rounded-md bg-white shadow-md  text-black">
                <div className="flex flex-col gap-2">
                  <div className="flex w-[300px] items-center gap-5 p-4">
                    <img
                      src={user.avatar || userImg}
                      className="w-[50px] h-[50px] rounded-full "
                      alt="logo"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="font-semibold text-[12px]">
                        Họ và tên : {user.username}
                      </div>
                      <div className="text-[12px] text-[#ccc]">
                        Code : {user.id.slice(0, 20) + "..."}
                      </div>
                      <div className="text-[12px] text-[#ccc] ">
                        Số điện thoại : {user.phone}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 hover:bg-[#ccc] hover:rounded-br-md  hover:rounded-bl-md flex items-center">
                    <span className="text-[12px]">
                      <FaUserGear size={20} color="#000" />
                    </span>

                    <span onClick={() => setSetting(!setting)} className="ml-2">
                      Quản lý tài khoản
                    </span>

                    {setting && (
                      <div className="bg-[#fff] fixed z-20 top-[90px] right-0 left-0 w-[500px] m-auto rounded-md shadow-2xl">
                        <h1 className="font-semibold text-[18px] text-center my-3">
                          Quản lý tài khoản
                        </h1>
                        <div className="flex flex-col px-8">
                          <InputForm
                            classLable={"text-[12px] ml-3 my-2"}
                            textLable={"Họ và tên"}
                            classStyle={
                              "p-4 w-full rounded-md shadow-md outline-none"
                            }
                            placeholderText={"Họ và tên ..."}
                            value={userUpdate.username}
                            type={"username"}
                            setValue={setUserUpdate}
                          />
                          <InputForm
                            classLable={"text-[12px] ml-3 my-2"}
                            textLable={"Số điện thoại"}
                            classStyle={
                              "p-4 w-full rounded-md shadow-md outline-none"
                            }
                            placeholderText={"Số điện thoại ..."}
                            value={userUpdate.phone}
                            type={"phone"}
                            setValue={setUserUpdate}
                          />
                          <div>
                            <label className="text-[12px] p-4 my-2" htmlFor="">
                              Chọn ảnh
                            </label>
                            <input
                              onChange={(e) =>
                                setUserUpdate((prev) => ({
                                  ...prev,
                                  avatar: e.target.files[0],
                                }))
                              }
                              type="file"
                              className="p-4 w-full rounded-md shadow-md outline-none"
                            />
                          </div>
                          <ButtonBtn
                            onClick={handdleUpdate}
                            classBtn={
                              "p-3 mb-5 text-white bg-blue-500 rounded-md text-[12px] my-4 hover:bg-blue-200 hover:cursor-pointer"
                            }
                            textBtn={"Cập nhật"}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-5 hover:bg-[#ccc] hover:rounded-br-md  hover:rounded-bl-md flex items-center">
                    <span className="text-[12px]">
                      <IoIosLogOut size={20} color="#000" />
                    </span>

                    <span onClick={() => dispatch(logout())} className="ml-2">
                      Đăng xuất
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`${active} flex items-center relative justify-between`}
          >
            <form action={`/search/${search}`}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`p-3 pr-[50px] outline-none rounded-md border ${active} w-[300px]`}
                placeholder="Nhập nội dung tìm kiếm của bạn vào đây ..."
              />
              {/* <input type="submit" id="search" value='Submit' /> */}
            </form>

            {close && (
              <span onClick={handleColose} className="absolute right-[35px]">
                <IoIosClose size={20} color="#ccc" />
              </span>
            )}

            <FaSearch
              onClick={handleSearch}
              className="absolute right-[12px] "
              size={20}
              color={close ? "#fff" : "#756f6f"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
