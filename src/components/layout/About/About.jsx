import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";
import ConDevLogo from "../../../assets/img/about-logo.webp";
import ConDevLogoSm from "../../../assets/img/about-logo-sm.webp";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToCerts = useCallback((e) => {
    e.preventDefault();
    const element = document.getElementById("certs");
    if (element) {
      const offset = 140;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <Content>
      <div className="about-container" id="about">
        <SectionTitle title={t("about.title")} />

        <div className="about-content mt-5 d-flex justify-content-between align-items-center flex-column-reverse flex-lg-row-reverse">
          <div className="d-flex flex-column about-text mt-4 mt-lg-0">
            <p>
              {t("about.p1.before")}
              <strong>{t("about.p1.strong1")}</strong>
              {t("about.p1.middle")}
              <strong>{t("about.p1.strong2")}</strong>
              {t("about.p1.after")}
            </p>

            <p>
              {t("about.p2.before")}
              <strong
                onClick={scrollToCerts}
                className="link-about"
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                aria-label={t("about.scrollToCerts")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToCerts(e);
                  }
                }}
              >
                {t("about.p2.link")}
              </strong>
            </p>

            <p>{t("about.p3")}</p>

            <p>
              {t("about.p4.before")}
              <strong>
                <a
                  href="https://www.instagram.com/con.dev"
                  className="link-about mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("about.condevInstagram")}
                >
                  Con Dev
                </a>
              </strong>
              {t("about.p4.after")}
            </p>

            <p>
              <strong>
                {t("about.p5.before")}
                <a
                  href="https://www.coursera.org/user/fed86c718d554ecffedc8856eaeaef09"
                  className="link-about"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("about.courseraProfile")}
                >
                  {t("about.p5.link")}
                </a>
                {t("about.p5.after")}
              </strong>
            </p>
          </div>

          <img
            src={innerWidth < 992 ? ConDevLogoSm : ConDevLogo}
            alt={t("about.imageAlt")}
            className="mt-4 mt-lg-0"
            loading="lazy"
          />
        </div>
      </div>
    </Content>
  );
};

export default React.memo(About);
