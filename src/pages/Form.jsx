import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassComp from  "../comps/ClassComp"


export default function Form() {

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [message,setMessage] = useState('')


const [myList,setMyList]=useState([]);


const addToList =()=>{
     addLater().then(()=>{
        alert('loading')
     }).catch((err)=>{
        alert('err')
     })
}

const addLater = async()=>{
    await setTimeout(()=>{
        setMyList((prev)=>[...prev,{name:name,email:email,message:message,time:Date.now()}])
    },3000)
}



    return <>

FORM

<ClassComp/>
<form className="p-6">
Name
<input className="bg-gray-200" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>


Email
<input className="bg-gray-200" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>


Message
<input className="bg-gray-200" type="text" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>


<button className="bg-red-200 px-4 py-2 m-2 rounded" type="button" onClick={()=>addToList()}>Save</button>


</form>

{myList.map((item)=><div key={item.time}>

<div className="flex">
    <li>{item.name}</li>
<li>{item.email}</li>
<li>{item.message}</li>

<li>{item.time}</li>
</div>

</div>)}

    </>
}