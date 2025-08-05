import "../css/projects.css" ; 

function Projects(){
    const projects = [
        {
            image: "torob-logo.png", 
            alt: "پروژه ربات تنظیم قیمت ترب", 
            title: "ربات قیمت گذاری ترب"
        }, 

        {
            image: "wordpress-logo.png", 
            alt: "wordpress", 
            title: "افزونه‌های خلاقانه وردپرسی"
        },

        {
            image: "personal managment website.png", 
            alt: "سامانه انضباط شخصی", 
            title: "سامانه مدیریت شخصی"
        },

        {
            image: "vpn.png", 
            alt: "VPN شخصی", 
            title: "فیلترشکن‌های شخصی"
        }
    ]
    
    return(
        <>
            <h2 className="font-semibold text-[24px] text-center mt-[25px] color-black leading-normal">‌مشارکت در این پروژه‌ها به من دید برنامه‌نویسی داده است</h2>
            <div className="mt-16" id="chert" >
                {
                    projects.map(
                        (project, index) => 
                        <div>
                            <img 
                            src={process.env.PUBLIC_URL + "/images/" + project.image}
                            className="w-[100px] mx-auto"
                            alt={project.alt}
                            />
                            <span className="block text-center mt-2 font-semibold text-[28px] ">{project.title}</span>
                            
                        </div>
                    )
                }
            </div>
        </>
    ); 
}

export default Projects ; 