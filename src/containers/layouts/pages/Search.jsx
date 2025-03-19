import React, { useEffect, useState } from "react";
import ba from "../../../assets/images/ba.jpg";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { apiSearch } from "../../../Service/apiUser";


const Search = () => {
  // const { search } = useSelector((state) => state.user);
  
 const {pathname} = useLocation();
  
 const [search,setSearch] = useState([]);
// const dispatch = useDispatch();
 
 let searchText = pathname.split('/')[2];

  useEffect(()=>{
    const fectSearch = async() => {
      const responsive = await apiSearch(searchText);
      responsive?.data?.err == 0 && setSearch(responsive?.data?.data);    
   
    }
    fectSearch();
  },[search])


  return (
    <div className="flex items-center justify-center mt-[100px] w-[1200px] m-auto">
      <div className="flex flex-col gap-2">
        {search.map((item, index) => {
          return (
            <NavLink
              key={index}
              className="hover:bg-[#ddd] px-5  hover:cursor-pointer rounded-md "
              to={`/detail/${item.id}`}
            >
              <div className="flex my-8 gap-5">
                <img src={ba} className="w-[150px] h-[150px] rounded-md" />
                <div className="flex flex-col gap-6">
                  <div className="flex gap-3 flex-col">
                    <h3 className="font-bold font-mono">{item?.title}</h3>
                    <p className="text-[#ccc] text-[16px] font-mono font-medium">
                      {item?.titleShort}
                    </p>
                  </div>
                  <div className="flex justify-end  gap-5 items-center">
                    <div className="text-[15px] flex gap-2 items-center text-[#ccc] ">
                      <FaRegComment size={20} color="#ccc" />3
                    </div>
                    <div className="text-[15px] text-[#ccc]">
                      {moment(item?.createdAt).format('LLL','vi')}
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
