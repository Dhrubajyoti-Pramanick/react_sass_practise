import React from "react";
import { useState } from "react";
const Hero = () => {
    let text = <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
    tempore ducimus porro eaque explicabo accusamus recusandae, veniam natus
    necessitatibus tempora doloremque quo magni delectus ratione tenetur
    harum atque mollitia quam sequi quas sit repellat numquam est! Corrupti
    reprehenderit omnis esse. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Laboriosam tempore ducimus porro eaque explicabo
    accusamus recusandae, veniam natus necessitatibus tempora doloremque quo
    magni delectus ratione tenetur harum atque mollitia quam sequi quas sit
    repellat numquam est! Corrupti reprehenderit omnis esse.
  </div>;
    const [toggle,setToggle] = useState(false);
  return (
    <section>
      {toggle? text : <></>}
      <button className="bg-purple-600 text-white p-2 rounded-md" onClick={()=>
    toggle? setToggle(false): setToggle(true)}>{toggle? "Hide": "Show"}</button>
    </section>
  );
};

export default Hero;
