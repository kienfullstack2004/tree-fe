import React, { useEffect, useState } from 'react'
import { ButtonBtn } from '../../components'
import { icons } from '../../../utils/icons'
import { useNavigate } from 'react-router-dom';
import {apiDeleteMedicine, apiGetAllMedicine} from "../../../Service/apiMedicine";
import {toast} from "react-toastify"
import moment from "moment";
import "moment/locale/vi"

const {IoIosAddCircleOutline} = icons;


const Caythuoc = () => {

   const navigator = useNavigate();
   const [medicine,setMedicine] = useState([]);


   useEffect(()=>{
     const fetchMedicine = async() => {
       const responsive = await apiGetAllMedicine();
       responsive?.data?.err === 0 && setMedicine(responsive?.data?.data);
       responsive?.data?.err === 0 &&  console.log(responsive?.data?.data);
     }
     fetchMedicine();
   },[])

   const handdleDelete = async(id) => {
      const fecthDelete = async() => 
        { 
          const res = await apiDeleteMedicine(id)
          res?.data?.err === 0 && toast.success("Xoá thành công !");
          res?.data?.err === 0 && setTimeout(()=>{
            location.reload();
           },2000);
        };

       fecthDelete();  
   }

  return (
    <div className="m-auto w-[80%] pb-9">
           <div className="flex mt-9 flex-col gap-2 text-white">
         <div className="w-full text-start">
           <ButtonBtn
             textBtn={"Thêm mới"}
             onClick={()=>navigator('/admin/add/quanlycaythuoc')}
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
               <th className="border border-gray-400">Tên cây</th>
               <th className="border border-gray-400">Mô tả</th>
               <th className="border border-gray-400">Ảnh</th>
               <th className="border border-gray-400">Ngày tạo</th>
               <th className="border border-gray-400">Chức năng</th>
             </tr>
           </thead>
           <tbody className="">
            {medicine.length > 0 ? medicine?.map((item,index)=>{
              return <tr key={index}>
              <td className="text-center border py-2 border-gray-400">{index + 1}</td>
              <td className="text-center border py-2 border-gray-400">{item?.nameMedicine}</td>
              <td className="text-center border py-2 border-gray-400 text-[12px] w-[200px]  ">
                {item?.desMedicineShort?.slice(0,50)}
              </td>
              <td className="text-center border py-2 border-gray-400 flex justify-center">
                <img
                  className="w-[50px] h-[50px]  rounded-full"
                  src={item?.imageMedicine}
                  alt="logo"
                />
              </td>
              
              <td className="text-center border py-2 border-gray-400">{moment(item?.createdAt).format('LLL','vi')}</td>
              <td className="text-center border py-2 border-gray-400">
                <ButtonBtn
                  classBtn={"bg-blue-500 p-3 mx-4 rounded-md rounded-md text-white text-[14px] "}
                  textBtn={"Sửa"}
                  onClick={()=>navigator(`/admin/edit/quanlycaythuoc/${item?.id}`)}
                />
                <ButtonBtn
                  classBtn={"bg-red-500 p-3 rounded-md text-white text-[14px] "}
                  textBtn={"Xoá"}
                  onClick={()=>handdleDelete(item?.id)}
                />
              </td>
            </tr> 
             }) : <td className='text-center' colSpan={6}>Không có bài viết .</td> }
           </tbody>
         </table>
       </div>
       </div>
  )
}

export default Caythuoc