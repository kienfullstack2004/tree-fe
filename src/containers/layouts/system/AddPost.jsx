import React, { useState } from "react";
import { ButtonBtn, InputForm } from "../../components";
import { icons } from "../../../utils/icons";
import { apiCreateNews, apiCreateTreeMedia } from "../../../Service/apiPost";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import { apiRegietrService } from "../../../Service/apiAuth";
import { apicreateMedicine } from "../../../Service/apiMedicine";

const { IoIosLogOut } = icons;

const AddPost = () => {
  // const {pathname} =  useLocation();
  const { addName } = useParams();

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

  const handleAdd = async () => {
    if (
      payloadTree.desTree !== "" &&
      payloadTree.imageTree !== "" &&
      payloadTree.nameTree !== "" &&
      payloadTree.zalo !== ""
    ) {
      const image = payloadTree.imageTree;

      const img = new FormData();

      img.append("file", image);
      img.append("upload_preset", "tree_media");
      img.append("cloud_name", "dp6cr7ea5");

      const resImg = await fetch(
        "https://api.cloudinary.com/v1_1/dp6cr7ea5/image/upload",
        {
          method: "post",
          body: img,
        }
      );

      const res = await resImg.json();

      console.log(res.secure_url);

      const obj = {
        ...payloadTree,
        imageTree: res.secure_url,
      };

      const fetchAdd = async () => {
        const responsive = await apiCreateTreeMedia(obj);
        responsive?.data?.err === 0 && toast.success("Dang bai thanh cong!");
        setTimeout(() => {
          history.back();
        }, 1000);
      };

      fetchAdd();
    }
  };

  const handdleAccount = async () => {
    if (
      payloadAccount.username !== "" &&
      payloadAccount.phone !== "" &&
      payloadAccount.pass !== "" &&
      payloadAccount.avatar !== ""
    ) {
      const image = payloadAccount.avatar;

      const img = new FormData();

      img.append("file", image);
      img.append("upload_preset", "tree_preset");
      img.append("cloud_name", "dp6cr7ea5");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dp6cr7ea5/image/upload",
        {
          method: "POST",
          body: img,
        }
      );

      const imgApi = await res.json();

      let accountnew = {
        ...payloadAccount,
        avatar: imgApi.secure_url,
      };

      const fetchRegister = async () => {
        const responsive = await apiRegietrService(accountnew);

        //  console.log(responsive);
        responsive?.data?.err === 0 && toast.success("Đăng ký thành công!");
        responsive?.data?.err === 0 && history.back();
      };
      fetchRegister();
    } else {
      toast.error("Vui lòng nhập đầy dủ thông tin vào!");
    }
  };

  const handdleMedcence = async () => {
    if (
      payloadMedicine.desMedicineShort !== "" &&
      payloadMedicine.desMedicinedetail !== "" &&
      payloadMedicine.imageMedicine !== "" &&
      payloadMedicine.nameMedicine !== ""
    ) {
      const image = payloadMedicine.imageMedicine;

      const formImg = new FormData();

      formImg.append("file", image);
      formImg.append("upload_preset", "tree_preset");
      formImg.append("cloud_name", "dp6cr7ea54");

      const imgApi = await fetch(
        "https://api.cloudinary.com/v1_1/dp6cr7ea5/image/upload",
        {
          method: "post",
          body: formImg,
        }
      );

      const res = await imgApi.json();

      console.log(res);

      const medicineNew = {
        ...payloadMedicine,
        imageMedicine: res.secure_url,
      };

      const fetchMedicine = async () => {
        const responsive = await apicreateMedicine(medicineNew);
        responsive?.data?.err === 0 &&
          toast.success("Tạo bài viết thành công !");
        responsive?.data?.err === 0 && history.back();
      };
      fetchMedicine();
    } else {
      toast.error("Vui lòng nhập đầy đủ thông tin vào đây !");
    }
  };

  const handleNew = async() => {

    if(payloadpPost.title!== "" && payloadpPost.detail !== "" && payloadpPost.titleShort !== "" && payloadpPost.image!== "" ){
 
      const file = payloadpPost.image;

      const img = new FormData();

      img.append("file",file);
      img.append("upload_preset","tree_preset");
      img.append("cloud_name","dp6cr7ea54");

      const res = await fetch("https://api.cloudinary.com/v1_1/dp6cr7ea5/image/upload",{
        method:'POST',
        body:img
      })

      const re = await res.json();

      let obj = {
        ...payloadpPost,
        image:re.secure_url,
      }

      const fetchCreateNew = async () => {
        const responsive = await apiCreateNews(obj);
        responsive?.data?.err === 0 && toast.success("Đăng bài thành công!");
        setTimeout(() => {
          history.back();
        }, 2000);
      };
    
      fetchCreateNew();
    }
    

   
  };

  return (
    <div className="pb-8 w-[80%] m-auto text-white justify-center mt-8">
      <div className="flex flex-col gap-2">
        <InputForm
          classLable={"text-[12px] w-full outline-none  text-white"}
          classStyle={"p-3 border rounded-md"}
          placeholderText={
            addName === "quanlycaycanh"
              ? "Nhập tên cây cảnh ..."
              : addName === "quanlytaikhoan"
              ? "Nhập tên người dùng ..."
              : addName === "quanlycaythuoc"
              ? "Nhập tên cây thuốc ..."
              : "Nhập tiêu đề"
          }
          textLable={
            addName === "quanlycaycanh"
              ? "Tên cây cảnh"
              : addName === "quanlytaikhoan"
              ? "Tên người dùng"
              : addName === "quanlycaythuoc"
              ? "Tên cây thuốc"
              : "Tiêu đề"
          }
          type={
            addName === "quanlycaycanh"
              ? "nameTree"
              : addName === "quanlytaikhoan"
              ? "username"
              : addName === "quanlycaythuoc"
              ? "nameMedicine"
              : "title"
          }
          setValue={
            addName === "quanlycaycanh"
              ? setPayloadTree
              : addName === "quanlytaikhoan"
              ? setPayloadAccount
              : addName === "quanlycaythuoc"
              ? setPayloadMedicine
              : setPayloadtPost
          }
          value={
            addName === "quanlycaycanh"
              ? payloadTree.nameTree
              : addName === "quanlytaikhoan"
              ? payloadAccount.username
              : addName === "quanlycaythuoc"
              ? payloadMedicine.nameMedicine
              : payloadpPost.title
          }
        />
        <InputForm
          classLable={"text-[12px] w-full outline-none  text-white"}
          classStyle={"p-3 border rounded-md"}
          placeholderText={
            addName === "quanlycaycanh"
              ? "Nhập mô tả ngắn ..."
              : addName === "quanlytaikhoan"
              ? "Nhập số điện thoại ..."
              : addName === "quanlycaythuoc"
              ? "Nhập tiêu đề ngắn cây thuốc ..."
              : "Nhập mô tả ngắn bài viết ..."
          }
          textLable={
            addName === "quanlycaycanh"
              ? "Mô tả ngắn"
              : addName === "quanlytaikhoan"
              ? "Số điện thoại"
              : addName === "quanlycaythuoc"
              ? "Nội dung ngắn"
              : "Nội dung ngắn"
          }
          type={
            addName === "quanlycaycanh"
              ? "desTree"
              : addName === "quanlytaikhoan"
              ? "phone"
              : addName === "quanlycaythuoc"
              ? "desMedicineShort"
              : "titleShort"
          }
          setValue={
            addName === "quanlycaycanh"
              ? setPayloadTree
              : addName === "quanlytaikhoan"
              ? setPayloadAccount
              : addName === "quanlycaythuoc"
              ? setPayloadMedicine
              : setPayloadtPost
          }
          value={
            addName === "quanlycaycanh"
              ? payloadTree.desTree
              : addName === "quanlytaikhoan"
              ? payloadAccount.phone
              : addName === "quanlycaythuoc"
              ? payloadMedicine.desMedicineShort
              : payloadpPost.titleShort
          }
        />
        {addName === "quanlycaycanh" && (
          <InputForm
            classLable={"text-[12px] w-full outline-none  text-white"}
            classStyle={"p-3 border rounded-md"}
            placeholderText={"Nhập số zalo ..."}
            textLable={"zalo"}
            type={"zalo"}
            setValue={
              // addName === "quanlycaycanh"
              setPayloadTree
            }
            value={payloadTree.zalo}
          />
        )}

        {addName === "quanlytaikhoan" && (
          <InputForm
            classLable={"text-[12px] w-full outline-none  text-white"}
            classStyle={"p-3 border rounded-md"}
            placeholderText={"Nhập mật khẩu ..."}
            textLable={"Mật khẩu"}
            type={"pass"}
            setValue={
              // addName === "quanlycaycanh"
              setPayloadAccount
            }
            value={payloadAccount.pass}
          />
        )}

        {addName === "quanlybaiviet" ? (
          <>
            <label htmlFor="des" className="text-[12px] font-extralight">
              Mô tả
            </label>
            <textarea
              placeholder=" Nhập nội dung bài viết..."
              value={payloadpPost.detail}
              onChange={(e) =>
                setPayloadtPost((prev) => ({ ...prev, detail: e.target.value }))
              }
              className="w-full border p-3 h-[500px] text-white outline-none rounded-md border-1-[#ccc] resize-none"
            ></textarea>
          </>
        ) : addName === "quanlycaythuoc" ? (
          <>
            <label htmlFor="des" className="text-[12px] font-extralight">
              Mô tả
            </label>
            <textarea
              placeholder="Nhập nội dung cây thuốc..."
              value={payloadMedicine.desMedicinedetail}
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
            addName === "quanlycaycanh"
              ? (e) =>
                  setPayloadTree((prev) => ({
                    ...prev,
                    imageTree: e.target.files[0],
                  }))
              : addName === "quanlybaiviet"
              ? (e) =>
                  setPayloadtPost((prev) => ({
                    ...prev,
                    image: e.target.files[0],
                  }))
              : addName === "quanlycaythuoc"
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
            addName === "quanlycaycanh"
              ? handleAdd
              : addName === "quanlybaiviet"
              ? handleNew
              : addName === "quanlytaikhoan"
              ? handdleAccount
              : handdleMedcence
          }
          classBtn={
            "p-3 flex justify-center items-center hover:cursor-pointer hover:bg-blue-300 items-center gap-3 text-white rounded-md bg-blue-500"
          }
          iconAfter={<IoIosLogOut size={20} />}
          textBtn={
            addName === "quanlytaikhoan"
              ? "Tạo tài khoản"
              : addName === "quanlycaycanh"
              ? "Đăng ngay"
              : addName === "quanlybaiviet"
              ? "Đăng bài viết"
              : "Đăng bài ngay"
          }
        />
      </div>
    </div>
  );
};

export default AddPost;
