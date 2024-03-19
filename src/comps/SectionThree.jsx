import React from "react";
import bg from "../images/bg.svg"
import Tile from "./Tile";

import i1 from "../images/i1.svg"
import i2 from "../images/i2.svg"
import i3 from "../images/i3.svg"
import i4 from "../images/i4.svg"

function SectionThree (){



    return <>   
    
    <div>
    <Tile title={"The easiest way of"} description={"Lorem Ipsum is simply dummy text of tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} image={i1}/>
    <Tile title={"The easiest way of"} description={"Lorem Ipsum is simply dummy text of tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} image={i2}/>
 
    <Tile title={"The easiest way of"} description={"Lorem Ipsum is simply dummy text of tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} image={i3} EnableButton={"Purchase now"}/>
 
    <Tile title={"The easiest way of"} description={"Lorem Ipsum is simply dummy text of tLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} image={i4} EnableButton={"Purchase now"}/>


    </div>

    </>
}

export default SectionThree