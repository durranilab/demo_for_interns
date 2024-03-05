import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyButton from './MyButton'
import Details from './Details'

function App() {

  const [name,setName] = useState("")
  const [address,setAddress] = useState("")
  const [phoneNum,setPhoneNum] = useState("")
  
  const [tempData,setTempData] = useState([])

  const addToList = () =>{
    const newList = tempData.concat({ name,address,phoneNum });
    setTempData(newList)
  }

  return (
    <div className="App">
      <div className='bg-red-100'>
        <h1 className='text-4xl text-center mt-12'>Student Form</h1>

          <form className='flex flex-col p-24'>

      <label className='font-bold'>Name</label>
      <input type='text' id='name' onChange={(e)=>{setName(e.target.value)}} />

      <label className='font-bold'>Address</label>
      <input type='text' id='address' onChange={(e)=>{setAddress(e.target.value)}}/>

      <label className='font-bold'>Phone</label>
      <input type='number' id='phone' onChange={(e)=>{setPhoneNum(e.target.value)}}/>

      <img src={logo} className='w-24 m-8 bg-white shadow-xl hover:shadow cursor-pointer p-6 rounded-xl'/>

    {/* <MyButton onClick={}/> */}

    <button type='button' className='bg-red-500  p-2 m-2 text-white' onClick={()=>addToList()}>Add</button>

    <Details listData={tempData}/>

          </form>
 
      </div>
    </div>
  );
}

export default App;
