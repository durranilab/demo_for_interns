import React from "react";

function Card ({title,image,description}){

    const showAlert = (msg)=>{
        alert(msg)
    }

    return<>
    
    <div className="mt-4 max-w-sm flex flex-col gap-2">
    <div className="w-16">
        <img src={image}/>
    </div>
<div className="font-bold" onClick={()=>{showAlert(title)}}>{title}</div>
<div className="text-xs">
      {description}
 </div>

 

</div>
    
    </>
}

export default Card