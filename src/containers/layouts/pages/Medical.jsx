import React, { useEffect, useState } from "react";
import { TagBox, ProductBox } from "../box";
import h1 from "../../../assets/images/ba.jpg";
import { apiGetAllTree } from "../../../Service/apiPost";

const arr = [
  { name: "Cay trong nha", link: "/caytrongnha" },
  // {name:'Cay ',link:'/caytrongnha'},
];


const Medical = () => {
  
  const [tree,setTree] = useState([]);
  

  useEffect(()=>{

    const responsive =  async() => {
         const res = await apiGetAllTree();
         res?.data?.err === 0 && setTree(res?.data?.data);
     }
     responsive();
  },[]) 

  


  return (
    <div className="mt-[90px] flex">
      <div className="min-lg:w-[20%] max-lg:hidden p-4 border-r-2 border-r-gray-500">
        <TagBox title={"Cac loai cay khac"} arr={arr} />
      </div>
      <div className="min-lg:w-[80%] max-lg:w-full p-7">
        <div className="p-6">
          <img src={h1} className="w-full h-[200px]" alt="logo" />
        </div>
        <div className="mt-3 max-lg:w-[80%] max-lg:m-auto grid max-sm:grid-cols-1 max-lg:grid-cols-2 min-lg:grid-cols-3">
          {tree?.map((item) => {
            return <ProductBox key={item.id} item={item} />;
          })}
        </div>
      </div>

    </div>
  );
};

export default Medical;
