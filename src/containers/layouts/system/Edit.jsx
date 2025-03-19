import React, { useEffect, useState } from "react";
import { InputForm, ButtonBtn } from "../../components";
import { useLocation, useParams } from "react-router-dom";
import { icons } from "../../../utils/icons";
import { apiGetAllUser, apiUpdateAccount } from "../../../Service/apiUser";
import { apiGetAllNews, apiGetAllTree } from "../../../Service/apiPost";
import { apiGetAllMedicine } from "../../../Service/apiMedicine";
import { apiGetAllPost } from "../../../Service/apiPost";
import { toast } from "react-toastify";

const { IoIosLogOut } = icons;

const Edit = () => {
  // const { hashedit } = useParams();

  const { idedit } = useParams();

  const { pathname } = useLocation();

  let hash = pathname.split("/")[3];

  const [payloadTree, setPayloadTree] = useState({
    nameTree: "",
    desTree: "",
    zalo: "",
    imageTree: "",
  });

  const [payloadAccount, setPayloadAccount] = useState({
    username: "",
    phone: "",
    pass: "",
    avatar: "",
  });

  const [payloadMedicine, setPayloadMedicine] = useState({
    nameMedicine: "",
    desMedicineShort: "",
    desMedicinedetail: "",
    imageMedicine: "",
  });

  const [payloadpPost, setPayloadtPost] = useState({
    title: "",
    titleShort: "",
    detail: "",
    image: "",
  });

  //const [news,setNew] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responsive1 = await apiGetAllMedicine();
      const responsive2 = await apiGetAllTree();
      const responsive3 = await apiGetAllPost();
      const responsive4 = await apiGetAllUser();

      //  console.log(res)

      // console.log(res)

      /// quan ly bai viet
      let res4 = responsive4?.data?.data.filter((i) => i.id === idedit);
      let res1 = responsive1?.data?.data?.filter((i) => i.id === idedit);
      let res3 = responsive3?.data?.data?.filter((i) => i.id === idedit);
      let res2 = responsive2?.data?.data?.filter((i) => i.id === idedit);

      setPayloadtPost(...res3);
      setPayloadAccount(...res4);
      setPayloadTree(...res2);
      setPayloadMedicine(...res1);
    };
    fetchData();
  }, []);

  // console.log(payloadAccount);

  // console.log(payloadMedicine);

  const fetchImage = async (image) => {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "tree_preset");
    formData.append("cloud_name", "dp6cr7ea5");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dp6cr7ea5/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const imgApi = await res.json();
    return imgApi.secure_url;
  };

  // console.log(payloadpPost);

  const handdleAccount = () => {
    if (
      payloadAccount.username !== "" &&
      payloadAccount.pass !== "" &&
      payloadAccount.phone !== "" &&
      payloadAccount.avatar !== ""
    ) {
      const fetchUpdate = async () => {
        let img = await fetchImage(payloadAccount.avatar);
  
        // console.log(img)

        let objectnew = {
          username: payloadAccount.username,
          pass: payloadAccount.pass,
          phone: payloadAccount.phone,
          id: idedit,
          avatar: img,
        };

        const responsive = await apiUpdateAccount(objectnew);

        responsive?.data?.err === 0 && toast.success("Cập nhật thành công !");
        responsive?.data?.err === 0 && location.reload();
      };
      fetchUpdate();
    }
  };

  const handleAdd = () => {};

  const handdleMedcence = () => {};

  const handleNew = () => {};

  return (
    <div className="my-6 w-[900px] text-[#fff] m-auto">
      <div className="flex flex-col gap-2">
        <InputForm
          classLable={"text-[12px] w-full outline-none  text-white"}
          classStyle={"p-3 border rounded-md"}
          placeholderText={
            hash === "quanlycaycanh"
              ? "Nhập tên cây cảnh ..."
              : hash === "quanlytaikhoan"
              ? "Nhập tên người dùng ..."
              : hash === "quanlycaythuoc"
              ? "Nhập tên cây thuốc ..."
              : "Nhập tiêu đề"
          }
          textLable={
            hash === "quanlycaycanh"
              ? "Tên cây cảnh"
              : hash === "quanlytaikhoan"
              ? "Tên người dùng"
              : hash === "quanlycaythuoc"
              ? "Tên cây thuốc"
              : "Tiêu đề"
          }
          type={
            hash === "quanlycaycanh"
              ? "nameTree"
              : hash === "quanlytaikhoan"
              ? "username"
              : hash === "quanlycaythuoc"
              ? "nameMedicine"
              : "title"
          }
          setValue={
            hash === "quanlycaycanh"
              ? setPayloadTree
              : hash === "quanlytaikhoan"
              ? setPayloadAccount
              : hash === "quanlycaythuoc"
              ? setPayloadMedicine
              : setPayloadtPost
          }
          value={
            hash === "quanlycaycanh"
              ? payloadTree?.nameTree
              : hash === "quanlytaikhoan"
              ? payloadAccount?.username
              : hash === "quanlycaythuoc"
              ? payloadMedicine?.nameMedicine
              : payloadpPost?.title
          }
        />
        <InputForm
          classLable={"text-[12px] w-full outline-none  text-white"}
          classStyle={"p-3 border rounded-md"}
          placeholderText={
            hash === "quanlycaycanh"
              ? "Nhập mô tả ngắn ..."
              : hash === "quanlytaikhoan"
              ? "Nhập số điện thoại ..."
              : hash === "quanlycaythuoc"
              ? "Nhập tiêu đề ngắn cây thuốc ..."
              : "Nhập mô tả ngắn bài viết ..."
          }
          textLable={
            hash === "quanlycaycanh"
              ? "Mô tả ngắn"
              : hash === "quanlytaikhoan"
              ? "Số điện thoại"
              : hash === "quanlycaythuoc"
              ? "Nội dung ngắn"
              : "Nội dung ngắn"
          }
          type={
            hash === "quanlycaycanh"
              ? "desTree"
              : hash === "quanlytaikhoan"
              ? "phone"
              : hash === "quanlycaythuoc"
              ? "desMedicineShort"
              : "titleShort"
          }
          setValue={
            hash === "quanlycaycanh"
              ? setPayloadTree
              : hash === "quanlytaikhoan"
              ? setPayloadAccount
              : hash === "quanlycaythuoc"
              ? setPayloadMedicine
              : setPayloadtPost
          }
          value={
            hash === "quanlycaycanh"
              ? payloadTree?.desTree
              : hash === "quanlytaikhoan"
              ? payloadAccount?.phone
              : hash === "quanlycaythuoc"
              ? payloadMedicine?.desMedicineShort
              : payloadpPost?.titleShort
          }
        />
        {hash === "quanlycaycanh" && (
          <InputForm
            classLable={"text-[12px] w-full outline-none  text-white"}
            classStyle={"p-3 border rounded-md"}
            placeholderText={"Nhập số zalo ..."}
            textLable={"zalo"}
            type={"zalo"}
            setValue={setPayloadTree}
            value={payloadTree?.zalo}
          />
        )}

        {hash === "quanlytaikhoan" && (
          <InputForm
            classLable={"text-[12px] w-full outline-none  text-white"}
            classStyle={"p-3 border rounded-md"}
            placeholderText={"Nhập mật khẩu ..."}
            textLable={"Mật khẩu"}
            type={"pass"}
            setValue={
              // hash === "quanlycaycanh"
              setPayloadAccount
            }
            value={payloadAccount?.pass}
          />
        )}

        {hash === "quanlybaiviet" ? (
          <>
            <label htmlFor="des" className="text-[12px] font-extralight">
              Mô tả
            </label>
            <textarea
              placeholder=" Nhập nội dung bài viết..."
              value={payloadpPost?.detail}
              onChange={(e) =>
                setPayloadtPost((prev) => ({ ...prev, detail: e.target.value }))
              }
              className="w-full border p-3 h-[500px] text-white outline-none rounded-md border-1-[#ccc] resize-none"
            ></textarea>
          </>
        ) : hash === "quanlycaythuoc" ? (
          <>
            <label htmlFor="des" className="text-[12px] font-extralight">
              Mô tả
            </label>
            <textarea
              placeholder="Nhập nội dung cây thuốc..."
              value={payloadMedicine?.desMedicinedetail}
              onChange={(e) =>
                setPayloadMedicine((prev) => ({
                  ...prev,
                  desMedicinedetail: e.target.value,
                }))
              }
              className="w-full border p-3 h-[500px] text-white outline-none rounded-md border-1-[#ccc] resize-none"
            ></textarea>
          </>
        ) : (
          <></>
        )}
        <label htmlFor="img">Ảnh</label>
        <input
          onChange={
            hash === "quanlycaycanh"
              ? (e) =>
                  setPayloadTree((prev) => ({
                    ...prev,
                    imageTree: e.target.files[0],
                  }))
              : hash === "quanlybaiviet"
              ? (e) =>
                  setPayloadtPost((prev) => ({
                    ...prev,
                    image: e.target.files[0],
                  }))
              : hash === "quanlycaythuoc"
              ? (e) =>
                  setPayloadMedicine((prev) => ({
                    ...prev,
                    imageMedicine: e.target.files[0],
                  }))
              : (e) =>
                  setPayloadAccount((prev) => ({
                    ...prev,
                    avatar: e.target.files[0],
                  }))
          }
          type="file"
        />

        <ButtonBtn
          onClick={
            hash === "quanlycaycanh"
              ? handleAdd
              : hash === "quanlybaiviet"
              ? handleNew
              : hash === "quanlytaikhoan"
              ? handdleAccount
              : handdleMedcence
          }
          classBtn={
            "p-3 flex justify-center items-center hover:cursor-pointer hover:bg-blue-300 items-center gap-3 text-white rounded-md bg-blue-500"
          }
          iconAfter={<IoIosLogOut size={20} />}
          textBtn={
            hash === "quanlytaikhoan"
              ? "Cập nhật tài khoản"
              : hash === "quanlycaycanh"
              ? "Sửa bài viết"
              : hash === "quanlybaiviet"
              ? "Cập nhật bài viết"
              : "Cập nhật bài viết"
          }
        />
      </div>
    </div>
  );
};

export default Edit;
