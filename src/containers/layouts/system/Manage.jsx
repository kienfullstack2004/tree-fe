import React, { useEffect, useState } from "react";
import { ButtonBtn } from "../../components";
import { icons } from "../../../utils/icons";
import { useNavigate } from "react-router-dom";
import { apiDeleteNewsPost, apiGetAllPost } from "../../../Service/apiPost";
import moment from "moment";
import "moment/locale/vi"
import { toast } from "react-toastify";

const { IoIosAddCircleOutline } = icons;

const Manage = () => {
  const navigator = useNavigate();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await apiGetAllPost();
      // res?.data?.err === 0 && console.log(res?.data?.data);
      res?.data?.err === 0 && setNews(res?.data?.data);
    };
    fetchNews();
  }, []);

   const handdleDelete = (id) => { 
    const fetchDelete = async() => {
      const res = await apiDeleteNewsPost(id);
      res?.data?.err === 0 && toast.success("Xoá thành công!");
      setTimeout(()=>{
        location.reload(); 
      },2000)
    }
     fetchDelete();
   }

  return (
    <div className="m-auto w-[80%] pb-9">
      <div className="flex mt-9 flex-col gap-2 text-white">
        <div className="w-full text-start">
          <ButtonBtn
            textBtn={"Thêm mới"}
            onClick={() => navigator("/admin/add/quanlybaiviet")}
            classBtn={
              "flex hover:cursor-pointer hover:bg-blue-200 items-center justify-end gap-2 bg-blue-500 text-white p-3 rounded-md mb-9"
            }
            iconAfter={<IoIosAddCircleOutline />}
          />
        </div>
        <table className="table border border-gray-400 border-collapse">
          <thead className="">
            <tr className="">
              <th className="border border-gray-400">STT</th>
              <th className="border border-gray-400">Tiêu đề</th>
              <th className="border border-gray-400">Mô tả ngắn</th>
              <th className="border border-gray-400">Ảnh</th>
           
              <th className="border border-gray-400">Ngày tạo</th>
              <th className="border border-gray-400">Chức năng</th>
            </tr>
          </thead>
          <tbody className="">
            {news.length > 0 ? news?.map((item, index) => {
              return <tr key={index}>
              <td className="text-center border py-2 border-gray-400">{index + 1}</td>
              <td className="text-center text-[12px] border py-2 border-gray-400">
                {item?.title?.slice(0,20) + "..."}
              </td>
              <td className="text-center border py-2 border-gray-400 text-[12px] w-[200px]  ">
                {item?.titleShort.slice(0, 30) + "..."}
              </td>
              <td className="text-center border py-2 border-gray-400 flex items-center justify-center">
                <img
                  className="w-[50px] h-[50px]  rounded-full"
                  src={item?.image}
                  alt="logo"
                />
              </td>
             
              <td className="text-center border py-2 border-gray-400">
               {moment(item?.createAt).format('LLL','vi')}
              </td>
              <td className="text-center border py-2 border-gray-400">
                <ButtonBtn
                  classBtn={
                    "bg-blue-500 p-3 mx-4 rounded-md rounded-md text-white text-[14px] "
                  }
                  textBtn={"Sửa"}
                  onClick={()=>navigator(`/admin/edit/quanlybaiviet/${item?.id}`)}
                />
                <ButtonBtn
                  classBtn={
                    "bg-red-500 p-3 rounded-md text-white text-[14px] "
                  }
                  onClick={()=>handdleDelete(item?.id)}
                  textBtn={"Xoá"}
                />
              </td>
            </tr> 
            }) : <tr><td colSpan={6} className="text-center">Không có bài viết.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
