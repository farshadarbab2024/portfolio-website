import { ConfigProvider } from "antd";
import LanguageSelect from "../Components/LanguageSelect";
import FirstView from "../Components/FirstView";
import SecondSection from "../Components/SecondSectoin";
import SkillsSection from "../Components/SkillsSection";
import Portfolios from "../Components/Portfolios";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import theme from "../Theme/ThemeConfig";
import { useParams } from "react-router-dom";
import { useLanguageStore } from "../States/Store";
import allTexts from "../Texts/AllTexts";

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
      document.title = "وبسایت معرفی فرشاد ارباب | کارآموز فرانت‌اند(React)";
      sign = -1;
    } else {
      lang = "English";
      direction = "ltr";
      oppositeDirection = "rtl";
      document.title =
        "Intern Front-End Developer (React) | Farshad Arbab's Portfolio Website";
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
