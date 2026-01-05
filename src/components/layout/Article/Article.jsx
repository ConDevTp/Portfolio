import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";
import React from "react";
import { useTranslation } from "react-i18next";

import fa1 from "../../../assets/img/Article/1.webp";
import fa2 from "../../../assets/img/Article/2.webp";
import fa3 from "../../../assets/img/Article/3.webp";

import en1 from "../../../assets/img/Article/1-en.webp";
import en2 from "../../../assets/img/Article/2-en.webp";
import en3 from "../../../assets/img/Article/3-en.webp";

const images = {
  fa: {
    article1: fa1,
    article2: fa2,
    article3: fa3,
  },
  en: {
    article1: en1,
    article2: en2,
    article3: en3,
  },
};

const Article = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const articles = t("articles.items", {
    returnObjects: true,
  });

  return (
    <section className="article-bg">
      <Content>
        <div
          className="article-container"
          id="articles"
          aria-labelledby="articles-title"
        >
          <SectionTitle title={t("articles.title")} id="articles-title" />

          <div className="article-content mt-5" role="list">
            {articles.map((item, index) => (
              <a
                key={index}
                href={
                  [
                    "https://www.instagram.com/p/DQeSpQEEdoB/",
                    "https://www.instagram.com/p/DQhFCeDjBGL/",
                    "https://www.instagram.com/p/DQrUojajHrY/",
                  ][index]
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                aria-label={item.aria}
              >
                <article className="article-item" role="listitem">
                  <img
                    src={images[lang][item.imageKey]}
                    alt={item.alt}
                    loading="lazy"
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </a>
            ))}
          </div>
        </div>
      </Content>
    </section>
  );
};

export default React.memo(Article);
