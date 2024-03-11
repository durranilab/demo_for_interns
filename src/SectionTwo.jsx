import React from "react";
import bg from "./images/bg.svg"
import book from "./images/book.png"
import Card from "./Card";

function SectionTwo (){



    return <>   
    
    <div className="w-full">

<div className="flex justify-between items-center">

<div className="max-w-md">

<div className="text-4xl text-indigo-900">Light Fast & Powerful</div>

<div className="text-indigo-900 mt-16">
    

      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the.
   

</div>

<div className="grid grid-cols-2 gap-2 mt-8">

<Card title={"The easiest way of"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} image={book}/>

<Card title={"The easiest way of"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"} image={book}/>

</div>

</div>
<div>
<img src={bg} style={{width: "400px"}}/>
</div>

</div>




    </div>



    </>
}

export default SectionTwo