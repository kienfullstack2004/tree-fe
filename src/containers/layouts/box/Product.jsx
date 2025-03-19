import React from "react";
import { ButtonBtn } from "../../components";


const Product = ({ item }) => {
  return (
    <div className="rounded-md bg-white my-5 w-[300px]  shadow-2xl">
     
          <div>
            <img src={item?.imageTree} className="w-full h-[160px] rounded-tr-md rounded-tl-md" alt="logo" />
            <div className="p-4">
              <h1 className="font-bold h-[30px] text-[16px]">{item?.nameTree}</h1>
              <p className="text-[16px]  italic text-[#000]">
                {(item?.desTree?.slice(0, 30) + "...")}
              </p>
              <div className="flex items-center justify-center gap-6 my-5">
                <a
                 className={
                    "p-3 text-white bg-red-500 rounded-md hover:bg-red-200 hover:cursor-pointer"
                  }
                href={`tel:${item?.zalo}`}
                >{'Liên hệ tư vấn'}</a>
                <a
                  className=
                    "p-3 bg-blue-500 text-white rounded-md hover:bg-blue-200 hover:cursor-pointer"
                  href={`tel:${item?.zalo}`}
                >{item?.zalo}</a>
              </div>
            </div>
          </div>
    
    </div>
  );
};

export default Product;
