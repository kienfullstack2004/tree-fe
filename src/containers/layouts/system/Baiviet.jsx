import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ButtonBtn } from '../../components'
import { icons } from '../../../utils/icons'
import { apiDeleteTree, apiGetAllTree } from '../../../Service/apiPost';
import moment from "moment";
import AddPost from './AddPost';

import { toast } from 'react-toastify';

const {IoIosAddCircleOutline} = icons;

const Baiviet = () => {

   const navigator = useNavigate();
  //  const dispatch = useDispatch();

   const [postTree,setPostTree] = useState([]);
  
  //  const {pathname} = useLocation();
    const {addName} = useParams();
   
 console.log(addName)
  //  console.log()

   useEffect(()=>{
     const fetchTree = async() => {
        const responsive = await apiGetAllTree();
        console.log(responsive);
        responsive?.data?.err === 0 && setPostTree(responsive?.data?.data);  
      } 
      fetchTree();
   },[])

   const handdleDelete = (id) => {
     const fetchDlete = async() => {
       const responsive = await apiDeleteTree(id);
       responsive?.data?.err === 0 && toast.success("Xoá thành công !");
       responsive?.data?.err === 0 && 
       setTimeout(()=>{
         location.reload();
       },2000)
     } 

     fetchDlete();
   }
  

  return (
     <div className="m-auto w-[80%] pb-9">
            <div className="flex mt-9 flex-col gap-2 text-white">
          <div className="w-full text-start">
            <ButtonBtn
              textBtn={"Thêm mới"}
              
              onClick={()=>navigator('/admin/add/quanlycaycanh')}
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
                <th className="border border-gray-400">Zalo</th>
                <th className="border border-gray-400">Ngày tạo</th>
                <th className="border border-gray-400">Chức năng</th>
              </tr>
            </thead>
            <tbody className="">
    
              {postTree.length > 0 ? postTree.map((item,index)=>{
                return <tr key={index}>
                <td className="text-center border py-2 border-gray-400">{index + 1}</td>
                <td className="text-center border py-2 border-gray-400">{item?.nameTree}</td>
                <td className="text-center border py-2 border-gray-400 text-[12px] w-[200px]  ">
                  {item?.desTree.slice(0,50)}
                </td>
                <td className="text-center border py-2 border-gray-400 flex justify-center">
                  <img
                    className="w-[50px] h-[50px]  rounded-full"
                    src={item?.imageTree}
                    alt="logo"
                  />
                </td>
                <td className="text-center border py-2 border-gray-400">
                    {item?.zalo}
                </td>
                <td className="text-center border py-2 border-gray-400">{moment(item?.createAt).fromNow()}</td>
                <td className="text-center border py-2 border-gray-400">
                  <ButtonBtn
                    classBtn={"bg-blue-500 p-3 mx-4 rounded-md rounded-md text-white text-[14px] "}
                    textBtn={"Sửa"}
                    onClick={()=>navigator(`/admin/edit/quanlycaycanh/${item?.id}`)}
                  />
                  <ButtonBtn  
                  classBtn={"bg-red-500 p-3 mx-4 rounded-md rounded-md text-white text-[14px] "}
                  textBtn={"Xoá"}
                  onClick={()=>handdleDelete(item?.id)}
                  />
                </td>
              </tr> 
              }) : <tr><td colSpan={9} className='p-3 text-center'>Không có bài viết nào.</td></tr>}
            </tbody>
          </table>
        </div>
        </div>
  )
}

export default Baiviet