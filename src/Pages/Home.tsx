import LanguageSelect from "../components/LanguageSelect";
import FirstView from "../components/FirstView";
import SecondSection from "../components/SecondSection";
import SkillsSection from "../components/SkillsSection";
import Portfolios from "../components/Portfolios";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLanguageStore } from "../States/Store";
import allTexts from "../Texts/AllTexts";
import React from "react";

function Landing() {
  const { language } = useParams();

  useEffect(() => {
    let lang: "English" | "Persian";
    let direction: "rtl" | "ltr";
    let oppositeDirection: "rtl" | "ltr";
    let sign: 1 | -1;

    if (language == "Persian") {
      lang = "Persian";
      direction = "rtl";
      oppositeDirection = "ltr";
      document.title = "وبسایت معرفی فرشاد ارباب | برنامه نویس جونیور فرانت‌اند(React)";
      sign = -1;
    } else {
      lang = "English";
      direction = "ltr";
      oppositeDirection = "rtl";
      document.title =
        "Front-End Developer (React.js) | Farshad Arbab's Portfolio Website";
      sign = 1;
    }

    useLanguageStore.setState({
      language: lang,
      direction: direction,
      oppositeDirection: oppositeDirection,
      websiteTexts: allTexts[lang],
      sign: sign,
    });

    document.documentElement.classList.remove("Persian", "English");
    document.documentElement.classList.add(lang);
  }, [language]);

  return (
      <div>
        <LanguageSelect />
        <FirstView />
        <SecondSection />
        <SkillsSection />
        <Portfolios />
        <Footer />
      </div>
  );
}

export default Landing;
