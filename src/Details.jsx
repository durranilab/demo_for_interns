import React from "react";


function Details({listData}){

    return <>
    
    <div>

<table className="table border-2 border-black w-full">
<thead>
    <tr className="border border-black bg-indigo-500 text-white">
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
    </tr>
</thead>
<tbody>
   {listData.map((item)=> 
   <tr className="border border-black">
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.phoneNum ==1 ? <div className="bg-red-500">{item.phoneNum}</div>:<div className="bg-green-500">{item.phoneNum}</div>}</td>
    </tr>
    )}
</tbody>


</table>

    </div>
    
    </>
}


export default Details

