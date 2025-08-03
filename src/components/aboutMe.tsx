function AboutMe(){
    const aboutMeText = "با وجود انجام پروژه های تمرینی فرانت اند، اما تجربه همکاری رسمی در یک شرکت به عنوان فرانت اند دولوپر را نداشته ام و به دنبال موقعیت شغلی کارآموزی هستم. تجربه فعالیت Backend و طراحی UI/UX به عنوان دو ابزار جانبی، در پیشروی کارها به صورت مستقلانه‌تر به من کمک میکند. در 90 درصد مواقع از منابع انگلیسی برای عیب یابی، جستجو و تماشای کورس‌ها استفاده میکنم." ; 
    return(
        <>
            <h2 className="font-semibold text-center mt-4 text-[1.5rem]" >درباره من</h2>
            <p className="mt-[1rem] text-justify text-[1.2rem]">{aboutMeText}</p>
            <button className="border-2 border-black rounded-[0.3rem] w-[9.4rem] 
            h-[2.8rem] text-[1.3rem] mt-4">دانلود رزومه</button>
        </>
    ) ; 
} ; 

export default AboutMe ;