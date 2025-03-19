import React from 'react'
import NewBox from './NewBox'
import { useSelector } from 'react-redux'

const NewPage = () => {
  
    
  const {post} = useSelector(state => state.auth);

  

  return (
    <div className='mt-[150px] max-md:p-4 max-md:w-full min-lg:w-[1200px]  m-auto'>
      
     {post?.map((item,index)=>{
      return  <NewBox key={index} item={item} />
     })}
      
    </div>
  )
}

export default NewPage