import React, { useRef } from "react";
import "../css/firstView.css" ; 

function FirstView() {
    const fullName = "فرشاد ارباب" ; 
    const jobTitle = "کارآموز برنامه‌نویسی Front-End(React)" ;
    return (
      //ntch delete id="laly"
      <section className="h-screen w-screen relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover absolute top-0 right-0"
        >
          <source src={process.env.PUBLIC_URL + "/background-video.mp4" } type="video/mp4" />
        </video>

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

          <h1 className="block text-center font-black color-black text-[60px] mt-8" >{fullName}</h1>
          <span className="block text-center text-[#888888] text-[26px]">{jobTitle}</span>
          <button className="w-[45vw] h-[11vw] background-color-black color-gray 
          rounded-[0.5rem] mx-auto block mt-4 text-[4.6vw]">نمونه کارها</button>
        </div>
      </section>
    );
  }
  

export default FirstView ; 