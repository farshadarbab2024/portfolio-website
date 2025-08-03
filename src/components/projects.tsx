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
            <h2 className=""></h2>
            <div className="grid grid-flow-col gap-4" style={{
                gridTemplateColumns: "repeat(1,1fr)",
                gridAutoRows: "100px", 
            }}>
                {
                    projects.map(
                        (project, index) => 
                        <div>
                            <img src={"/images/" + project.image} alt={project.alt} 
                            className="" />
                            <span className="">{project.title}</span>
                        </div>
                    )
                }
            </div>
        </>
    ); 
}

export default Projects ; 