
import React, { useEffect, useState } from 'react'
import { ButtonBtn } from '../../components'
import { icons } from '../../../utils/icons'
import { useNavigate } from 'react-router-dom';
import { apiDeleteAccount, apiGetAllUser } from '../../../Service/apiUser';
import moment from 'moment';
import { toast } from 'react-toastify';
const {IoIosAddCircleOutline} = icons;

const taikhoan = () => {
  
    const navigator = useNavigate();

    const [user,setUser] = useState([]);

    useEffect(()=>{
       const featchUser = async() => {
          const res = await apiGetAllUser();
          res?.data?.err === 0 && setUser(res?.data?.data);
       }   
       featchUser();
    },[])


   const hanndleDelete = (id) => {
       const fetchDeleteAccount = async() => {
         const responsive = await apiDeleteAccount(id);
         responsive?.data?.err === 0 && toast.success("Xoá thành công !");
         setTimeout(()=>{
            location.reload();
         },2000) 
       } 
       fetchDeleteAccount();
   }

  return (
    <div className="m-auto w-[80%] pb-9">
           <div className="flex mt-9 flex-col gap-2 text-white">
         <div className="w-full text-start">
           <ButtonBtn
             textBtn={"Thêm mới"}
             onClick={()=>navigator('/admin/add/quanlytaikhoan')}
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
               <th className="border border-gray-400">Họ và tên</th>
               <th className="border border-gray-400">Số điện thoại</th>
               <th className="border border-gray-400">Ảnh đại diện</th>
               <th className="border border-gray-400">Ngày tạo</th>              
               <th className="border border-gray-400">Chức năng</th>
             </tr>
           </thead>
           <tbody className="">
   
             {user.length > 0 ? user?.map((item,index)=>{
              return <tr key={index}>
               <td className="text-center border py-2 border-gray-400">{index + 1}</td>
               <td className="text-center border py-2 border-gray-400">{item?.username}</td>
              
               <td className="text-center border py-2 border-gray-400">
                    {item?.phone}
               </td>
               <td className='text-center border flex justify-center items-center py-2 border-gray-400'>
                  <img src={item?.avatar} className='w-[50px] h-[50px] rounded-full'/>
               </td>
               <td className="text-center border py-2 border-gray-400">{moment(item?.createdAt).fromNow()}</td>
               <td className="text-center border py-2 border-gray-400">
                 <ButtonBtn
                   classBtn={"bg-blue-500 p-3 mx-4 rounded-md rounded-md text-white text-[14px] "}
                   onClick={()=>navigator(`/admin/edit/quanlytaikhoan/${item?.id}`)}
                   textBtn={"Sửa"}
                 />
                 <ButtonBtn
                   classBtn={"bg-red-500 p-3 rounded-md text-white text-[14px] "}
                   textBtn={"Xoá"}
                   onClick={()=>hanndleDelete(item?.id)}
                 />
               </td>
             </tr>
             }) : <tr><td colSpan={6} className='text-center'>Không có bài viết.</td></tr> }
           </tbody>
         </table>
       </div>
       </div>
  )
}

export default taikhoan