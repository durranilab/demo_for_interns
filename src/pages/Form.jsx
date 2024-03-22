import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Form() {

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [message,setMessage] = useState('')

const [formData,setFormData] =useState([])

function saveData(){

    axios.post('http://192.168.1.4:8000/form/create',{
        name:name,
        email:email,
        message:message
    },).then((res)=>{
        console.log(res.data)
        getAllFormData()
    }).catch((err)=>{
        console.log(err)
    })

}

function getAllFormData(){
    axios.get('http://192.168.1.4:8000/form/list').then((res)=>{
setFormData(res.data)

    }).catch((err)=>{

    })
}

useEffect(()=>{
    getAllFormData()
},[])

    return <>

FORM

<form className="p-6">
Name
<input className="bg-gray-200" type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>


Email
<input className="bg-gray-200" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>


Message
<input className="bg-gray-200" type="text" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>


<button className="bg-red-200 px-4 py-2 m-2 rounded" type="button" onClick={()=>saveData()}>Save</button>


</form>

{formData.map((data)=><div key={data.name}>

<br/>
{data.name} <br/>
{data.email} <br/>
{data.message}
</div>)}

    </>
}