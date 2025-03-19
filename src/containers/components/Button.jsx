import React, { memo } from "react";

const Button = ({  textBtn, classBtn,iconAfter,onClick }) => {
  
  
  return (
    <button type="button" 
    className={classBtn}
    onClick={onClick}
   >
     {textBtn ? textBtn : ''} {iconAfter  ? iconAfter : ''}

   </button>  
  );
};

export default memo(Button);
