import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";
import ConDevLogo from "../../../assets/img/about-logo.jpg";
import ConDevLogoSm from "../../../assets/img/about-logo-sm.jpg";
import { useState } from "react";

const About = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useState(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToCerts = (e) => {
    e.preventDefault();
    const element = document.getElementById("certs");
    if (element) {
      const offset = 140; // فاصله از بالا مثل Nav
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Content>
      <div className="about-container " id="about">
        <SectionTitle title="دربـــاره مـن" />
        <div className="about-content mt-5 d-flex justify-content-between align-items-center flex-column-reverse flex-lg-row-reverse">
          <div className="d-flex flex-column about-text mt-4 mt-lg-0">
            <p>
              توسعه‌دهنده ارشد فرانت‌اند با بیش از ۶ سال تجربه تخصصی در ساخت
              رابط‌های کاربری مدرن، <strong>performant</strong> و کاربرمحور،
              متخصص خلق تجربه‌های کاربری روان و <strong>intuitive</strong>.
            </p>
            <p>
              دارای مدارک رسمی و معتبر فرانت‌اند از <strong>مایکروسافت،</strong>{" "}
              متا <strong>(Meta)</strong> و آی‌بی‌ام <strong>(IBM)</strong>. این
              گواهی‌نامه‌ها تسلط من بر استانداردهای جهانی و فناوری‌های پیشرفته
              توسعه وب تأیید می‌کنن{" "}
              <strong
                onClick={scrollToCerts}
                className="link-about"
                style={{ cursor: "pointer" }}
              >
                {" "}
                (مدارک در رزومه قابل مشاهده است)
              </strong>
            </p>
            <p>
              از سال ۱۳۹۸ وارد حوزه توسعه شدم و از ۱۴۰۰ به طور کاملاً تخصصی بر
              فرانت‌اند متمرکز شده‌ام. اکنون با تجربه گسترده در پروژه‌های
              چالش‌برانگیز، رابط‌هایی می‌سازم که از نظر فنی بی‌نقص و از نظر
              کسب‌وکاری تأثیرگذار بر رشد محصول هستند.{" "}
            </p>
            <p>
              همزمان، با برند آموزشی خودم
              <strong>
                <a
                  href="https://www.instagram.com/con.dev"
                  className="link-about mx-1"
                >
                  Con Dev
                </a>
              </strong>
              به تولید محتوای تخصصی و آموزش مباحث پیشرفته توسعه وب می‌پردازم و
              دانش خود را با جامعه توسعه‌دهندگان به اشتراک می‌گذارم.{" "}
            </p>
            <p>
              <strong>
                برای تأیید صحت مدارک و مشاهده جزئیات بیشتر، می‌توانید از{" "}
                <a
                  href="https://www.coursera.org/user/fed86c718d554ecffedc8856eaeaef09"
                  className="link-about"
                >
                  لینک
                </a>{" "}
                اقدام کنید.
              </strong>
            </p>
          </div>
          <img
            src={innerWidth < 992 ? ConDevLogoSm : ConDevLogo}
            alt="Con Dev - Arash Ch"
            className="mt-4 mt-lg-0"
          />
        </div>
      </div>
    </Content>
  );
};

export default About;
