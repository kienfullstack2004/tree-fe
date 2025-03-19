import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { icons } from "../../../utils/icons";
// import ha from "../../../assets/images/ba.jpg";
import Tag from "../pages/Tag";
import ha2 from "../../../assets/images/ba.jpg";
import { ButtonBtn } from "../../components";
import { apiGetAllCountComment, apiGetAllPost } from "../../../Service/apiPost";
import moment from "moment";
import "moment/locale/vi";
moment.locale("vi");
import { formatVietnamese } from "../../../utils/formatVietnamese";

import {
  apiCreateComment,
  apiGetCommentOnePost,
} from "../../../Service/apiUser";
import { useSelector } from "react-redux";
import { apiGetAllMedicine } from "../../../Service/apiMedicine";
// import { apiGetOneNewDetail } from "../../../Service/apiPost";
const { FaComments, CiTwitter, FaFacebookSquare, IoIosArrowBack } = icons;

const DetailMedice = () => {
  // const { pathname } = useLocation();
//   const { pathname } = useLocation();

//   let path = pathname.split("/")[1];

  const { userData } = useSelector((state) => state.user);

  // let covert = pathname.split("/")[1];
  // console.log(covert);

  const [medicineOne, setMedicineOne] = useState([]);
  const [medicineAll, setMedicineAll] = useState([]);

  const [comment, setComment] = useState("");
//   const [postDetail, setPostDetail] = useState([]);
//   const [postDiff, setPostDiff] = useState([]);

  const { id } = useParams();

  const [comments, setComments] = useState([]);

//   useEffect(() => {
//     // const fetchComment = async () => {
//     //   const responsive2 = await apiGetCommentOnePost(id);
//     //   responsive2?.data?.err === 0 && setComments(responsive2?.data?.data);
//     // };
//     // fetchComment();
//   }, []);

  const handdleSubmit = () => {
    const createComment = async () => {
      if (comment !== "") {
        const responsive1 = await apiCreateComment({
          des: comment,
          postId: id,
        });
        responsive1?.data?.err === 0 && location.reload();
      } else {
        //
      }
    };

//     createComment();
//   };

//   useEffect(() => {
//     // const rr = []
//     // rr.filter

//     // const fetctMedicine = async () => {};
//     // fetctMedicine();
//   }, []);

  useEffect(() => {
    const fectchPost = async () => {
    //   const responsive = await apiGetAllPost();
      const responsive2 = await apiGetAllMedicine();
      const res = responsive2?.data?.data?.filter((i) => i.id == id);
      const res1 = responsive2?.data?.data?.filter((i) => i.id != id);

    //   const postOneDetail = responsive?.data?.data?.filter(
    //     (item) => item.id === id
    //   );
    //   const postAll = responsive?.data?.data?.filter((item) => item.id !== id);

      setMedicineOne(res);
    //   setPostDetail(postOneDetail);
      setMedicineAll(res1);
    //   setPostDiff(postAll);
    };

    fectchPost();
  }, []);

  // console.log()

  const handleBack = () => {
    window.history.back();
  };


  console.log(medicineAll)
  console.log(medicineOne)
//   console.log(medicineOne)

  return (
    <div className="mt-[190px] flex gap-3">
      <div className="flex flex-col justify-end w-[70%]">
        <div className="w-[70%] m-auto">
          <div className="flex flex-col gap-3">
            <Tag location={medicineOne[0]?.nameMedicine} />
            <div className="flex gap-2" onClick={handleBack}>
              <IoIosArrowBack
                className="hover:cursor-pointer hover:text-[#000] text-[#ccc]"
                size={20}
              />
              <span className="text-[12px] text-[#ccc]">Back</span>
            </div>
          </div>
        {medicineOne &&
              medicineOne?.map((item, index) => {
                return (
                  <div key={index} className="my-6 flex flex-col gap-3">
                    <h2 className="font-mono font-bold text-[30px]">
                      {item?.nameMedicine}
                    </h2>
                    <p className="text-[12px] font-extralight text-[#ccc]">
                      {item?.desMedicineShort}
                    </p>
                    <div className="flex gap-2">
                      <p className="text-[12px] font-extralight">
                        Cập nhật:
                        {moment(item?.updateddAt).locale("vi").format("LLL")}
                      </p>
                      <p className="text-[12px] font-extralight">
                        Ngày đăng: {formatVietnamese(item?.createdAt)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="p-2 bg-[#ccc] rounded-md">
                        <CiTwitter size={20} color="#000" />
                      </div>
                      <div className="p-2 bg-[#ccc] rounded-md">
                        <FaFacebookSquare size={20} color="#000" />
                      </div>
                    </div>
                    <img
                      src={item?.imageMedicine}
                      className="h-[500px] w-full object-center"
                      alt="logo"
                    />
                    <div className="my-5 font-extralight">
                      {item?.desMedicinedetail}
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex gap-4">
                        <img
                          src={userData?.avatar}
                          alt="logo"
                          className="w-[50px] h-[50px] rounded-full"
                        />
                        <div className="flex gap-3">
                          <input
                            value={comment}
                            className="outline-none p-3 border-b-2 border-b-gray-500 w-[500px]"
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Bình luận của bạn ..."
                          />
                          <ButtonBtn
                            classBtn={
                              "p-4 bg-blue-500 rounded-md hover:bg-blue-200 hover:cursor-pointer text-white"
                            }
                            onClick={handdleSubmit}
                            textBtn={"Bình luận"}
                          />
                        </div>
                      </div>
                    </div>

                    <ul className="">
                      {comments?.map((item, index) => {
                        return (
                          <li key={index} className="my-3  flex gap-3">
                            <div className="flex gap-2 bg-[#9c9393]  p-5 rounded-md">
                              <img
                                src={item?.authorName.avatar}
                                className="w-[50px] h-[50px] rounded-full "
                              />
                              <div className="flex flex-col gap-2">
                                <p className="font-semibold">{item.author}</p>
                                <p className="text-[12px] text-[#000]">
                                  {item.des}
                                </p>
                                <p className="text-end text-[12px] text-[#ccc]">
                                  {moment(item?.createdAt).format("LLL", "vi")}
                                </p>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
        </div>
      </div>
      <div className="w-[30%] pr-8">
        <h1 className="font-bold p-3 border-b-2 border-b-gray-800 ">
          Bài viết khác
        </h1>
        <ul className="mt-4">
          
          {  medicineAll &&
              medicineAll.map((item, index) => {
                return (
                  <a key={index} href={`/detail/${item?.id}`}>
                    <li key={index} className="flex my-2 gap-2">
                      <img
                        src={item?.imageMedicine}
                        className="w-[100px] h-[100px] rounded-md"
                        alt="logo"
                      />
                      <div className="flex gap-5 flex-col ">
                        <h2 className="text-justify">
                          {item?.nameMedicine.slice(0, 10) + "..."}
                        </h2>
                        <div className="flex gap-3 justify-end">
                          <p className="flex  text-[12px] gap-2 text-[#ccc] items-center">
                            <FaComments size={20} color="#ccc" />{" "}
                            {/* <span>{item?.count}</span> */} 3
                          </p>
                          <p className="text-[12px] text-[#ccc]">
                            {moment(item?.createdAt).fromNow()}
                          </p>
                        </div>
                      </div>
                    </li>
                  </a>
                );
              })
           
            }
        </ul>
      </div>
      <div></div>
    </div>
  );
}};

export default DetailMedice
