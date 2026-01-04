import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";
import ConDevLogo from "../../../assets/img/about-logo.jpg";
import ConDevLogoSm from "../../../assets/img/about-logo-sm.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const About = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useState(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Content>
      <div className="about-container " id="about">
        <SectionTitle title="دربـــاره مـن" />
        <div className="about-content mt-5 d-flex justify-content-between align-items-center flex-column-reverse flex-lg-row-reverse">
          <div className="d-flex flex-column about-text mt-4 mt-lg-0">
            <p>
              {" "}
              من یه توسعه‌دهنده فرانت‌اند هستم که عاشق ساخت رابط‌های کاربری مدرن
              و روانم. هدفم هم خلق تجربه‌هایی جذابه که کاربر ازش لذت ببره.
            </p>{" "}
            <p>
              دارای مدارک فرانت‌اند از مایکروسافت، متا (فیسبوک) و آی‌بی‌ام (IBM)
              که در رزومه قابل مشاهده است.
              <Link to="/certs">
                {" "}
                <strong className="link-about">( مشاهده مدارک )</strong>
              </Link>
            </p>{" "}
            <p>
              متولد ۱۳۸۳ ساکن شیراز هستم؛ فعالیتم در حوزه برنامه‌نویسی را از سال
              ۱۳۹۸ شروع کردم و از سال ۱۴۰۰ به‌صورت تخصصی وارد این عرصه شدم،
              اکنون با گذشت بیش از ۶ سال و پس از کسب تجربه و مهارت‌های عملی در
              حوزه فرانت‌اند، در پروژه‌های مختلف مشغول فعالیت هستم.
            </p>
            <p>
              در کنار فعالیتم در حوزه توسعه فرانت‌اند، با برند آموزشی خودم
              <strong>
                {" "}
                <a href="/certs" className="link-about">
                  Con Dev
                </a>{" "}
              </strong>
              به تولید محتوای تخصصی و آموزش مباحث پیشرفته‌ی توسعه وب می‌پردازم.{" "}
            </p>
            <p>
              <strong>
                جهت تایید صحت مدارک اینجانب میتوانید از طریق این{" "}
                <a href="/certs" className="link-about">
                  لینک{" "}
                </a>{" "}
                اقدام کنید
              </strong>
            </p>
          </div>
          <img
            src={window.innerWidth < 992 ? ConDevLogoSm : ConDevLogo}
            alt="Con Dev - Arash Ch"
            className="mt-4 mt-lg-0"
          />
        </div>
      </div>
    </Content>
  );
};

export default About;
