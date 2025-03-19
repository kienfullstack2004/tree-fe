import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetOneNewDetail } from "../../../Service/apiPost";
import DetailNew from "./DetailNew";


const DetailPostNew = () => {
  const { id } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const responsive = await apiGetOneNewDetail(id);
      responsive?.data?.err === 0 && setNews(responsive?.data?.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="mt-[150px]">
         <DetailNew item={news}/>     
     </div>
  );
};

export default DetailPostNew;
