import React, { useRef } from "react";
import "../css/firstView.css" ; 

function FirstView() {
    const fullName = "فرشاد ارباب" ; 
    const jobTitle = "کارآموز برنامه‌نویسی Front-End(React)" ;
    return (
      <section className="h-screen w-screen relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover absolute top-0 right-0"
        >
          <source src="background-video.mp4" type="video/mp4" />
        </video>

        <div className="flex justify-center w- " id="languages_div">
          <img src={process.env.PUBLIC_URL + "/images/language.png"} alt="language" />
          <img src={process.env.PUBLIC_URL + "/images/down.png"} alt="down" />
        </div>

        <div className="z-10 absolute top-1/2 right-1/2 translate-x-1/2
        -translate-y-1/2 w-[85vw]">

          <div //picture circle
          className="w-[60vw] h-[60vw] mx-auto flex justify-center items-center"
          id="picture_circle">
            <img src={process.env.PUBLIC_URL + "/images/Farshad Arbab profile picture.png" }
            alt="تصویر پروفایل فرشاد ارباب"
            className="rounded-full w-[93%] h-[93%]"
            />
          </div>

          <h1 className="block text-center font-black color-black text-[8vw] mt-8" >{fullName}</h1>
          <span className="block text-center text-[#888888] text-[4.3vw]">{jobTitle}</span>
          <button className="w-[45vw] h-[11vw] background-color-black color-gray 
          rounded-[0.5rem] mx-auto block mt-8 text-[4.6vw]">نمونه کارها</button>
        </div>
      </section>
    );
  }
  

export default FirstView ; 