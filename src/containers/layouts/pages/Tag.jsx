import React from 'react'

const Tag = ({location}) => {
  return (
    <div className='p-3 rounded-md  text-[12px] font-medium'>{`Nhà > Chi tiết > `} <span className='text-[#ccc] font-extralight'>{location}</span></div>
  )
}

export default Tag