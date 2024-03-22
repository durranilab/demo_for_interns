import logo from "../images/logo.svg"
import "../App.css";
import { useEffect, useState } from "react";
import MyButton from "../comps/MyButton";
import Details from "../comps/Details";
import SectionTwo from "../comps/SectionTwo";
import SectionThree from "../comps/SectionThree";
import SectionFour from "../comps/SectionFour";
import { Link } from "react-router-dom";
import axios from "axios";


function App() {

  const [quote,setQuote]= useState('The easiest way of turning text into videos')
  const [currentImage,setCurrentImage] = useState('')


  const getFromAPI = () =>{

    axios.get('https://type.fit/api/quotes').then((response)=>{
      console.log(response.data)
      var randomnumber = Math.floor(Math.random() * response.data.length);
      setQuote(response.data[randomnumber].text)
    })

  }

  const getImages = ()=>{
    axios.get('https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json').then((res)=>{
        setCurrentImage(res.data.url)
    })
  }

  function saveData(name,phone){
    axios.post('/save').then((res)=>{
      alert('success')
    }).catch((err)=>{
      alert('failed')
    })
  }

  useEffect(()=>{
    getFromAPI()
    getImages()
  },[])



  return (
    <div className="App max-w-6xl mx-auto ">
     

        <div className="mt-16 mb-16 py-16 flex justify-between	items-center ">
          <div className="max-w-xl">
            <div className="text-5xl text-indigo-950 font-bold">
              {quote}
            </div>

            <div className="mt-12 text-indigo-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>

          <div className="flex gap-4 max-w-md mt-8" >
          <button className="bg-indigo-900 text-white w-full mt-12" onClick={()=>getFromAPI()}>
              Try it yourself
            </button>

            <button className="border-2 border-indigo-900 text-indigo-900 w-full mt-12" onClick={()=>{
              getImages()
            }}>
              Learn More
            </button>
          </div>

          <img src={currentImage}/>

          </div>

        
      </div>


<SectionTwo/>

<SectionThree/>

<SectionFour/>


    </div>
  );
}

export default App;
