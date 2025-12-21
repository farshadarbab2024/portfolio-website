// const texts = {
//   languageText: {
//     Persian: "زبان وبسایت",
//     English: "languages",
//   },
//   persian: {
//     Persian: "فارسی",
//     English: "Persian",
//   },
//   english: {
//     Persian: "انگلیسی",
//     English: "English",
//   },
// };

export type Portfolio = {
  title: string;
  skills: string[];
  explaintions: string[];
  userLink: string;
  githubLink: string;
  imageSrc: string;
  imageAlt: string;
};

export type Project = {
  image: string;
  alt: string;
  title: string;
};

export type Skill = {
  name: string;
  image: string;
  alt: string;
  color: string;
  details: string[];
};

const allTexts = {
  Persian: {
    //resumeLink
    resumeFileName: "Persian Resume.pdf",

    //LanguageSelect
    languageText: "زبان وبسایت",
    persian: "فارسی",
    english: "انگلیسی",

    //AboutMe
    aboutMeText:
      "با وجود انجام پروژه های تمرینی فرانت اند، اما تجربه همکاری رسمی در یک شرکت به عنوان فرانت اند دولوپر را نداشته ام و به دنبال موقعیت شغلی کارآموزی هستم. تجربه فعالیت Backend و طراحی UI/UX به عنوان دو ابزار جانبی، در پیشروی کارها به صورت مستقلانه‌تر به من کمک میکند. در 90 درصد مواقع از منابع انگلیسی برای عیب یابی، جستجو و تماشای کورس‌ها استفاده میکنم.",
    aboutMeSecondText:
      "هدف فعلی من علاوه بر کسب درآمد، کسب تجربه و تخصص بیشتر است.",
    aboutMeH2Text: "درباره من",
    resumeDownloadText: "دانلود رزومه",

    //FirstView
    fullName: "فرشاد ارباب",
    jobTitle: "کارآموز برنامه‌نویسی فرانت‌اند(React)",
    profileImageAlt: "تصویر پروفایل فرشاد ارباب",
    portfoliosButtonText: "نمونه‌کارها",

    //Footer
    footerTitle: "آیا قصد استخدام من را دارید؟",
    footerDescription:
      "اگر به هر شکلی احساس کردید من میتوانم برای کسب و کار یا تیم شما مفید باشم، در برقراری ارتباط راحت و بدون تعارف عمل کنید :)",
    email: "Farshadarbab2024@gmail.com",
    phoneNumber: "09135736069",
    phoneNumberLabel: "شماره تماس:",
    emailLabel: "ایمیل: ",

    //portfolios
    portfolios: [
      {
        title: "فرم لاگین",
        skills: ["React", "HTML", "CSS", "TypeScript", "TailwindCSS"],
        explaintions: [
          "کامپوننت نویسی در React",
          "استفاده از هوک‌های useState, useRef, useEffect",
          "استفاده از Arrow Function‌ ها در جاوااسکریپت ",
        ],
        userLink: "https://farshadarbab2024.github.io/professional_login_page/",
        githubLink:
          "https://github.com/farshadarbab2024/professional_login_page",
        imageSrc: "login-page.png",
        imageAlt: "security theme login page",
      },

      {
        title: "ثبت‌نام رانندگان اسنپ",
        skills: ["React", "HTML", "CSS", "JavaScript"],
        explaintions: [
          "بخش سوالات متدال کشویی",
          "استفاده از map برای رندر کردن داده‌ها",
          "ریسپانسیو برای موبایل، تبلت و دسکتاپ",
        ],
        userLink: "https://farshadarbab2024.github.io/snapp-landing/",
        githubLink: "https://github.com/farshadarbab2024/snapp-landing",
        imageSrc: "/snapp-driver-register.png",
        imageAlt: "security theme login page",
      },

      {
        title: "وبسایت معرفی تخصص خودم",
        skills: [
          "React",
          "TypeScript",
          "HTML",
          "CSS",
          "Ant Design",
          "Adobe XD",
        ],
        explaintions: [
          "استفاده از grid در CSS",
          "FlexBox در CSS",
          "Button, Card و آیکون‌ها در Ant Design",
        ],
        userLink: "https://farshadarbab2024.github.io/portfolio-website/",
        githubLink: "https://github.com/farshadarbab2024/portfolio-website/",
        imageSrc: "/portfolio-website-persian.png",
        imageAlt: "portfolio-website for Farsahd Arbab",
      },
    ] as Portfolio[],
    portfoliosTitle: "نمونه‌کارها",
    seeInGithubText: "مشاهده در گیت‌هاب",

    //Projects
    projects: [
      {
        image: "torob-logo.png",
        alt: "پروژه ربات تنظیم قیمت ترب",
        title: "ربات قیمت گذاری ترب",
      },

      {
        image: "wordpress-logo.png",
        alt: "wordpress",
        title: "افزونه‌های خلاقانه وردپرسی",
      },

      {
        image: "personal-management.png",
        alt: "سامانه انضباط شخصی",
        title: "سامانه مدیریت شخصی",
      },

      {
        image: "vpn.png",
        alt: "VPN شخصی",
        title: "فیلترشکن‌های شخصی",
      },
    ] as Project[],
    projectsTitle: "‌تجربه مشارکت در این پروژه‌ها",

    //skills
    skillTitle: "مهارت‌ها",
    skillsSubTitle: "تکنولوژی‌هایی که تجربه عملی فعالیت با آن‌ها را دارم",

    skills: [
      {
        name: "HTML",
        image: "HTML5.png",
        alt: "HTML",
        color: "#E44D26",
        details: [
          "h1, h2,..., h6, p, span,...",
          "head, body, div, section, header, footer,...",
          "title, meta description",
          "table, th, td, tr",
          "form, input, select, textarea, ...",
          "onclick, onchange, onsubmit, ...",
          "img, video",
          "Links: a tag, href",
          "Lists: ul, ol, li,...",
          "class, id",
          "iframe",
          "...",
        ],
      },

      {
        name: "CSS",
        image: "css3.png",
        alt: "CSS",
        color: "#264DE4",
        details: [
          "displays: block, inline, flex, grid,...",
          "positions: relative, absolute, fixed, sticky,...",
          "units(rem, em, %, vw, vh, px,...)",
          "responsive design: @media, max-width, min-width,...",
          "font: font-size, text-align, font-family,...",
          "Pseudo-classes: :hover, :focus, :active,...",
          "Pseudo-elements: ::after, ::before, ::placeholder,...",
          "padding, border, margin,...",
          "translate, transition, :hover to make animation",
          "CSS selectors: class, id, tag-name, *,...",
          "Style tag, style attribue, link css file to html",
          "...",
        ],
      },

      {
        name: "JavaScript",
        image: "JavaScript.png",
        alt: "JavaScript",
        color: "#D4B830",
        details: [
          "Data types: string, number, boolean, array, object,...",
          "Arithmetic and comparison operators(*, +, ==, <,...)",
          "Conditions: if, else, switch,...",
          "Loops: for, while, do...while, for...of,...",
          "Functions: declaration, expression, arrow",
          "Error handling: try, catch, throw",
          "map, filter, forEach,...",
          "APIs: fetch, axios",
          "DOM manipulation(innerHTML, innerText)",
          "Event handling: addEventListener,...",
          "Classes: super, constructor,...",
          "Events: onclick, onchange, onload,...",
          "Select elements(by id, className, tagName,...)",
          "localStorage, pagination",
          "...",
        ],
      },

      {
        name: "React",
        image: "React.png",
        alt: "React",
        color: "#61DBFB",
        details: [
          "Components",
          "Props",
          "export, export default, import ",
          "Hooks: useState, useRef, useEffect,...",
          "React Router library",
          "map in React",
          "JSX",
          "...",
        ],
      },

      {
        name: "TypeScript",
        image: "TypeScript.png",
        alt: "TypeScript",
        color: "#2D79C7",
        details: [
          "Why Use TypeScript Over JavaScript",
          "Basic Types: string, number, boolean,...",
          "Special Types: any, void, unknown, never,...",
          "Custom Types: Types & Interfaces",
          "Functions: Input and Output Types",
          "TypeScript Error Handling",
          "Using TypeScript with React",
          "...",
        ],
      },

      {
        name: "TailwindCSS",
        image: "TailwindCSS.png",
        alt: "tailwindcss",
        color: "#16BECB",
        details: [
          "Setup & Integration",
          "Display Properties: block, flex, grid,...",
          "Positioning: absolute, fixed, sticky",
          "Spacing: padding, margin",
          "Typography: font-size, font-weight,...",
          "...",
        ],
      },

      {
        name: "Redux",
        image: "Redux.svg",
        alt: "Redux",
        color: "#764ABC",
        details: [
          "Core Concepts: Actions, Reducers, Store, Slices",
          "Redux Toolkit",
          "Integrating Redux with React",
          "React-Redux Hooks: useDispatch, useSelector",
          "Debugging Redux state with Redux DevTools",
          "Building Practical Projects Like Todo List with Redux",
          "...",
        ],
      },

      {
        name: "Git & Github",
        image: "git.png",
        alt: "Git",
        color: "#F05033",
        details: [
          "GitHub Pages",
          "Understanding branches",
          "Git basics: git status, git add, git commit",
          "Pushing projects to GitHub repositories",
          "Cloning projects from GitHub",
          "...",
        ],
      },

      {
        name: "Figma",
        image: "figma.png",
        alt: "figma",
        color: "#FF61F6",
        details: [
          "Design user-friendly interfaces",
          "Build reusable components",
          "Use popular plugins like Iconify",
          "Create and reuse custom fills",
          "Draw and export shapes",
          "Work efficiently with Figma shortcuts",
          "...",
        ],
      },

      {
        name: "Ant Design",
        image: "Ant Design.png",
        alt: "Ant Design",
        color: "#f73e4f",
        details: [
          "Form, Form.Item, Form.List (validation, dynamic fields)",
          "Button, Input, Select (core components)",
          "Icons (Ant Design Icons)",
          "FloatButton, Tag (utilities)",
          "Modal, Card (UI patterns & layouts)",
          "Table (data display with filters & pagination)",
          "Message (notifications)",
          "ConfigProvider (global theming & localization)",
          "...",
        ],
      },

      {
        name: "اصول اولیه سئو",
        image: "Google.png",
        alt: "سئو و گوگل",
        color: "#31AA52",
        details: [
          "SEO-friendly URLs",
          "Alt text & image optimization",
          "Semantic HTML tags",
          "User-friendly UI/UX",
          "Lazy loading & fast load speed",
          "Mobile-first & responsive design",
          "Internal linking (avoid orphan pages)",
          "Clear site structure (priority pages from home)",
          "Title & meta tags",
          "robots.txt & sitemap",
          "Relevant file naming",
          "Google Search Console, Analytics, Hotjar",
          "...",
        ],
      },

      // {
      //   name: "Zustand",
      //   image: "Zustand.png",
      //   alt: "Zustand",
      //   color: "#433e38",
      //   details: [
      //     "Core Concepts: Actions, Reducers, Store, Slice",
      //     "Combine TypeScript with Zustand",
      //     "Simplify state handling with Zustand.",
      //     "Build multi-language websites using Zustand.",
      //   ],
      // },
      // {
      //   name: "Framer-motion",
      //   image: "Framer-motion.png",
      //   alt: "framer-motion",
      //   color: "#f400ad",
      //   details: [],
      // },
    ] as Skill[],

    notFoundSubTitle: "صفحه‌ای که دنبال آن میگردید پیدا نشد",
    notFoundButtonText: "بازگشت به خانه",
    notFoundButtonDestination: "/Persian/",
  },

  English: {
    //Resume Link
    resumeFileName: "English Resume.pdf",
    //LanguageSelect
    languageText: "language",
    persian: "Persian",
    english: "English",

    //AboutMe
    aboutMeText:
      "I’m a <b>front-end</b> developer focused on building <b>web applications</b> with <b>ReactJS</b>. I also have experience <b>designing UI/UX</b> interfaces, but I prefer to be a programmer rather than a designer as much as possible. I have experience collaborating with a team. Designing, coding, and problem-solving are part of my daily routine. My background in other fields of programming has helped me develop a better programming mindset.",
    aboutMeSecondText:
      "Definitely, I can help your company grow — just give me a chance to prove it!",
    aboutMeH2Text: "About Me",
    resumeDownloadText: "Download Resume",

    //FirstView
    fullName: "Farshad Arbab",
    // jobTitle: "کارآموز برنامه‌نویسی فرانت‌اند(React)",
    jobTitle: "Junior Front-End Developer (React)",
    profileImageAlt: "Farshad Arbab profile picture",
    portfoliosButtonText: "Projects",

    //Footer
    footerTitle: "Do you intend to hire me?",
    footerDescription:
      "If in any way you feel that I can be useful for your business or team, feel free to reach out :)",
    email: "Farshadarbab2024@gmail.com",
    phoneNumber: "+989135736069",
    phoneNumberLabel: "Phone Number: ",
    emailLabel: "Email: ",

    //portfolios
    portfolios: [
      {
        title: "Price Automation Tool",
        skills: [
          "React",
          "TypeScript",
          "HTML",
          "TailwindCSS",
          "Ant Design",
          "Figma",
          "Framer-motion",
          "Git",
          "Zod",
          "React-hook-form",
        ],
        explaintions: [
          "Use Zod for validation login/signup forms",
          "Handle get, post, patch, delete apis",
          "Validate email by sending email verfication code",
        ],
        userLink: "https://farshadarbab2024.github.io/",
        githubLink: "https://github.com/farshadarbab2024/torob-pricing-robot/",
        imageSrc: "/torob pricing robot.png",
        imageAlt: "torob pricing robot website",
      },
      {
        title: "Personal Portfolio Website",
        skills: [
          "React",
          "TypeScript",
          "HTML",
          "CSS",
          "Ant Design",
          "Adobe XD",
        ],
        explaintions: [
          "Using CSS Grid",
          "FlexBox in CSS",
          "Button, Card, and Icons in Ant Design",
        ],
        userLink: "https://farshadarbab2024.github.io/portfolio-website/",
        githubLink: "https://github.com/farshadarbab2024/portfolio-website/",
        imageSrc: "/portfolio-website.png",
        imageAlt: "portfolio-website for Farsahd Arbab",
      },
      {
        title: "Login Form",
        skills: ["React", "HTML", "CSS", "TypeScript", "TailwindCSS"],
        explaintions: [
          "Component-based coding in React",
          "Using hooks: useState, useRef, useEffect",
          "Handle complicated background lighting algorithm",
        ],
        userLink: "https://farshadarbab2024.github.io/professional_login_page/",
        githubLink:
          "https://github.com/farshadarbab2024/professional_login_page",
        imageSrc: "login-page.png",
        imageAlt: "security theme login page",
      },
      {
        title: "Snapp Driver Registration",
        skills: ["React", "HTML", "CSS", "JavaScript"],
        explaintions: [
          "FAQ collapsible section",
          "Using Map to Render Data",
          "Responsive Design for Mobile, Table, and Desktop",
        ],
        userLink: "https://farshadarbab2024.github.io/snapp-landing/",
        githubLink: "https://github.com/farshadarbab2024/snapp-landing",
        imageSrc: "/snapp-driver-register.png",
        imageAlt: "security theme login page",
      },
      {
        title: "Type Speed Calculation",
        skills: ["React", "HTML", "TailwindCSS", "TypeScript", "Ant Design"],
        explaintions: [
          "Calculate accuracy",
          "Calculate speed",
          "Show final rating and skill description",
        ],
        userLink: "https://farshadarbab2024.github.io/type-speed/",
        githubLink: "https://github.com/farshadarbab2024/type-speed/",
        imageSrc: "/type-speed.png",
        imageAlt:
          "type speed test website. An opened modal that show your type speed and accuracy rate and describe your situation in typing.",
      },
      {
        title: "Character Counter",
        skills: ["React.js", "TypeScript", "TailwindCSS", "Ant Design"],
        explaintions: [
          "Calculate the number of words, characters, sentences, and pages",
          "Identify the most commonly used characters in your text and show their usage percentage",
          "Copy and clear the text",
        ],
        userLink: "https://farshadarbab2024.github.io/character-counter/",
        githubLink: "https://github.com/farshadarbab2024/character-counter",
        imageSrc: "/character-counter.png",
        imageAlt:
          "A character counter that count number of characters, words, sentences and pages in your text. Let's you copy or clear your text and also show you the most common use characters. ",
      },
    ] as Portfolio[],
    portfoliosTitle: "Projects",
    seeInGithubText: "See on GitHub",

    //Projects
    projects: [
      {
        image: "vpn.png",
        alt: "Personal VPN",
        title: "Personal VPNs",
      },
      {
        image: "personal-management.png",
        alt: "Personal Discipline System",
        title: "Personal discipline system",
      },

      {
        image: "wordpress-logo.png",
        alt: "wordpress",
        title: "Creative wordPress plugins",
      },

      {
        image: "torob-logo.png",
        alt: "WordPress Pricing Robot",
        title: "Price adjustment robot",
      },
    ] as Project[],
    projectsTitle: "Experience Contributing to These Projects",

    //skills
    skillsTitle: "Skills",
    skillsSubTitle: "Technologies I have hands-on experience with",
    skills: [
      {
        name: "HTML",
        image: "HTML5.png",
        alt: "HTML",
        color: "#E44D26",
        details: [
          "h1, h2,..., h6, p, span,...",
          "head, body, div, section, header, footer,...",
          "title, meta description",
          "table, th, td, tr",
          "form, input, select, textarea, ...",
          "onclick, onchange, onsubmit, ...",
          "img, video",
          "Links: a tag, href",
          "Lists: ul, ol, li,...",
          "class, id",
          "iframe",
          "...",
        ],
      },

      {
        name: "CSS",
        image: "css3.png",
        alt: "CSS",
        color: "#264DE4",
        details: [
          "displays: block, inline, flex, grid,...",
          "positions: relative, absolute, fixed, sticky,...",
          "units(rem, em, %, vw, vh, px,...)",
          "responsive design: @media, max-width, min-width,...",
          "font: font-size, text-align, font-family,...",
          "Pseudo-classes: :hover, :focus, :active,...",
          "Pseudo-elements: ::after, ::before, ::placeholder,...",
          "padding, border, margin,...",
          "translate, transition, :hover to make animation",
          "CSS selectors: class, id, tag-name, *,...",
          "Style tag, style attribue, link css file to html",
          "...",
        ],
      },

      {
        name: "JavaScript",
        image: "JavaScript.png",
        alt: "JavaScript",
        color: "#D4B830",
        details: [
          "Data types: string, number, boolean, array, object,...",
          "Arithmetic and comparison operators(*, +, ==, <,...)",
          "Conditions: if, else, switch,...",
          "Loops: for, while, do...while, for...of,...",
          "Functions: declaration, expression, arrow",
          "Error handling: try, catch, throw",
          "map, filter, forEach,...",
          "APIs: fetch, axios",
          "DOM manipulation(innerHTML, innerText)",
          "Event handling: addEventListener,...",
          "Classes: super, constructor,...",
          "Events: onclick, onchange, onload,...",
          "Select elements(by id, className, tagName,...)",
          "localStorage, pagination",
          "...",
        ],
      },

      {
        name: "React",
        image: "React.png",
        alt: "React",
        color: "#61DBFB",
        details: [
          "Components",
          "Props",
          "export, export default, import ",
          "Hooks: useState, useRef, useEffect,...",
          "React Router library",
          "map in React",
          "Organize and manage project structure professionally",
          "Work with APIs (GET, POST, PATCH, DELETE) and handle authentication",
          "Design, structure, and manage layouts effectively",
          "...",
        ],
      },

      {
        name: "TypeScript",
        image: "TypeScript.png",
        alt: "TypeScript",
        color: "#2D79C7",
        details: [
          "Why Use TypeScript Over JavaScript",
          "Basic Types: string, number, boolean,...",
          "Special Types: any, void, unknown, never,...",
          "Custom Types: Types & Interfaces",
          "Functions: Input and Output Types",
          "TypeScript Error Handling",
          "Using TypeScript with React",
          "Work with type imports and exports",
          "...",
        ],
      },

      {
        name: "TailwindCSS",
        image: "TailwindCSS.png",
        alt: "tailwindcss",
        color: "#16BECB",
        details: [
          "Setup & Integration",
          "Display Properties: block, flex, grid,...",
          "Positioning: absolute, fixed, sticky",
          "Spacing: padding, margin",
          "Typography: font-size, font-weight,...",
          "Create responsive websites using Tailwind’s breakpoints (sm, md, lg, etc.)",
          "Define and manage custom colors in index.css",
          "Apply background gradients, images, etc",
          "...",
        ],
      },

      {
        name: "Redux",
        image: "redux.svg",
        alt: "Redux",
        color: "#764ABC",
        details: [
          "Core Concepts: Actions, Reducers, Store, Slices",
          "Redux Toolkit",
          "Integrating Redux with React",
          "React-Redux Hooks: useDispatch, useSelector",
          "Debugging Redux state with Redux DevTools",
          "Building Practical Projects Like Todo List with Redux",
          "...",
        ],
      },

      {
        name: "Git & Github",
        image: "git.png",
        alt: "Git",
        color: "#F05033",
        details: [
          "Understanding branches",
          "Git basics: git status, git add, git commit",
          "Pushing projects to GitHub repositories",
          "Cloning projects from GitHub",
          "Merge branches",
          "Resolve conflicts",
          "Follow Git best practices (e.g., separate commits, fast merging)",
          "GitHub Pages",
          "...",
        ],
      },

      {
        name: "Ant Design",
        image: "Ant Design.png",
        alt: "Ant Design",
        color: "#f73e4f",
        details: [
          "Form, Form.Item, Form.List (validation, dynamic fields)",
          "Button, Input, Select (core components)",
          "Icons (Ant Design Icons)",
          "FloatButton, Tag (utilities)",
          "Modal, Card (UI patterns & layouts)",
          "Table (data display with filters & pagination)",
          "Message (notifications)",
          "ConfigProvider (global theming & localization)",
          "Image uploading, video uploading, and image cropping.",
          "...",
        ],
      },

      {
        name: "Nextjs",
        image: "nextjs.png",
        alt: "framer-motion",
        color: "black",
        details: [
          "Basic usage of Next.js",
          "Manage packages with pnpm",
          "Work with Client and Server Components",
          "...",
        ],
      },
      {
        name: "Figma",
        image: "figma.png",
        alt: "figma",
        color: "#1abcfd",
        details: [
          "Design user-friendly interfaces",
          "Build reusable components",
          "Use popular plugins like Iconify",
          "Create and reuse custom fills",
          "Draw and export shapes",
          "Work efficiently with Figma shortcuts",
          "...",
        ],
      },

      {
        name: "Zustand",
        image: "Zustand.png",
        alt: "Zustand",
        color: "#453e38",
        details: [
          "Manage global state",
          "Work with slices",
          "Create and use stores efficiently",
          "...",
        ],
      },
      {
        name: "framer-motion",
        image: "Framer-motion.png",
        alt: "framer-motion",
        color: "#770bff",
        details: [
          "Enhance landing pages with user-friendly animations",
          "initial, WhileInView, animate, ...",
          "transition, duration, delay, ...",
          "...",
        ],
      },
      {
        name: "Basic SEO Principles",
        image: "Google.png",
        alt: "SEO and Google",
        color: "#31AA52",
        details: [
          "SEO-friendly URLs",
          "Alt text & image optimization",
          "Semantic HTML tags",
          "User-friendly UI/UX",
          "Lazy loading & fast load speed",
          "Mobile-first & responsive design",
          "Internal linking (avoid orphan pages)",
          "Clear site structure (priority pages from home)",
          "Title & meta tags",
          "robots.txt & sitemap",
          "Relevant file naming",
          "Google Search Console, Analytics, Hotjar",
          "...",
        ],
      },
      {
        name: "Jest",
        image: "Jest.svg",
        alt: "one of my skill is Jest in front-end field",
        color: "#c63d14",
        details: [
          "Familiar with core Jest matchers (toBe, toEqual, toStrictEqual, etc.)",

          "Write unit tests to verify internal functions",

          "Set up and configure Jest in projects",

          "Use Jest with TypeScript",
        ],
      },
    ] as Skill[],

    //Not Found Page
    notFoundSubTitle: "Sorry, the page you visited does not exist.",
    notFoundButtonText: "Back Home",
    notFoundButtonDestination: "/English/",
  },
};

export default allTexts;
