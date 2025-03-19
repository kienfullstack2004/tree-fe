import React,{memo} from 'react'

const Input = ({classStyle, onInput,classLable,textLable,name,setValue,value,placeholderText,type}) => {
  return (
    <div className='flex flex-col gap-2'>
      {classLable && <label htmlFor='phone' className={ classLable}>{textLable}</label>}
      <input type={type==="pass" ? "password" : "text"} name={name} id={name} onInput={onInput} onChange={(e)=>setValue((prev) => ({...prev,[type]:e.target.value}))} value={value} placeholder={placeholderText} className={classStyle} /> 
    </div>
  )
}

export default memo(Input)