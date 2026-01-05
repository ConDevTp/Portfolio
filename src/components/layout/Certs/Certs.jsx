import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";

import IBM1 from "../../../assets/img/IBM/1.webp";
import IBM2 from "../../../assets/img/IBM/2.webp";
import IBM3 from "../../../assets/img/IBM/3.webp";
import IBM4 from "../../../assets/img/IBM/4.webp";
import IBM5 from "../../../assets/img/IBM/5.webp";
import IBM6 from "../../../assets/img/IBM/6.webp";
import IBM7 from "../../../assets/img/IBM/7.webp";
import IBM8 from "../../../assets/img/IBM/8.webp";
import IBM9 from "../../../assets/img/IBM/9.webp";
import IBM10 from "../../../assets/img/IBM/10.webp";

import MS1 from "../../../assets/img/Microsoft/1.webp";
import MS2 from "../../../assets/img/Microsoft/2.webp";
import MS3 from "../../../assets/img/Microsoft/3.webp";
import MS4 from "../../../assets/img/Microsoft/4.webp";
import MS5 from "../../../assets/img/Microsoft/5.webp";
import MS6 from "../../../assets/img/Microsoft/6.webp";
import MS7 from "../../../assets/img/Microsoft/7.webp";

import Meta1 from "../../../assets/img/Meta/1.webp";
import Meta2 from "../../../assets/img/Meta/2.webp";
import Meta3 from "../../../assets/img/Meta/3.webp";
import Meta4 from "../../../assets/img/Meta/4.webp";
import Meta5 from "../../../assets/img/Meta/5.webp";
import Meta6 from "../../../assets/img/Meta/6.webp";
import Meta7 from "../../../assets/img/Meta/7.webp";

import { useState, useEffect } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

const Certs = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const certs = [
    {
      img: IBM5,
      org: "IBM",
      title: "Front-End Developer",
      link: "https://coursera.org/share/4c3c0aabaf1e975bc3461d9d5d042d3d",
    },
    {
      img: MS2,
      org: "Microsoft",
      title: "Front-End Developer",
      link: "https://coursera.org/share/01173e4b2c577575328a35cc8f683db1",
    },
    {
      img: Meta6,
      org: "Meta",
      title: "Front-End Developer",
      link: "https://coursera.org/share/16e7f155b8f107ae6fc2bfd6a903a92e",
    },
    {
      img: IBM1,
      org: "IBM",
      title: "HTML, CSS, & JavaScript",
      link: "https://coursera.org/share/9db8ebff66c8532db564a050fa021fdb",
    },
    {
      img: IBM2,
      org: "IBM",
      title: "Software Developer",
      link: "https://coursera.org/share/49e9860342004bd868cc0d63e68987db",
    },
    {
      img: IBM3,
      org: "IBM",
      title: "Web and Front-End Development",
      link: "https://coursera.org/share/4d2543c756e895fd2c981dddf737d224",
    },
    {
      img: MS3,
      org: "Microsoft",
      title: "Web Application Security",
      link: "https://coursera.org/share/baedd74ba9df2162d754e026f2c7d634",
    },
    {
      img: MS4,
      org: "Microsoft",
      title: "UI/UX Design Principles",
      link: "https://coursera.org/share/4278af5858ba25da23b4d32fd91c10cf",
    },
    {
      img: MS5,
      org: "Microsoft",
      title: "Blazor for Front-End",
      link: "https://coursera.org/share/e584cdc3d72ba3f300ca583aabc421f7",
    },
    {
      img: Meta3,
      org: "Meta",
      title: "Advanced React",
      link: "https://coursera.org/share/fd0988ce0a230ed453079da5f3278b0d",
    },
    {
      img: Meta4,
      org: "Meta",
      title: "HTML & CSS in depth",
      link: "https://coursera.org/share/acf24a984577c93f34b3ebb3d5875591",
    },
    {
      img: Meta5,
      org: "Meta",
      title: "Version Control",
      link: "https://coursera.org/share/947df04a4cb03b03bbbe3dae668f08da",
    },
    {
      img: IBM4,
      org: "IBM",
      title: "Software Engineering",
      link: "https://coursera.org/share/47ba2c1611ee36e11968044aced4e4f3",
    },
    {
      img: IBM6,
      org: "IBM",
      title: "Designing User (UI/UX)",
      link: "https://coursera.org/share/93648bfa6cf80826491fc480f269ff8e",
    },
    {
      img: IBM7,
      org: "IBM",
      title: "Front-End with Bootstrap",
      link: "https://coursera.org/share/f18ba3acf87225c79ff6e5800bc7aa9c",
    },
    {
      img: IBM8,
      org: "IBM",
      title: "Cloud Native, DevOps, Agile, NoSQL",
      link: "https://coursera.org/share/00a6bc731164f292460356787c6060da",
    },
    {
      img: IBM9,
      org: "IBM",
      title: "Git and GitHub",
      link: "https://coursera.org/share/27fea0a243bb9d8cb08d368265da4359",
    },
    {
      img: IBM10,
      org: "IBM",
      title: "Front-End and Web Development",
      link: "https://coursera.org/share/fa4f1e4be302e128afcf1d18244e67a3",
    },
    {
      img: MS1,
      org: "Microsoft",
      title: "Coding Front-End",
      link: "https://coursera.org/share/0deb082a4f6f74deef69253932d3069f",
    },
    {
      img: MS6,
      org: "Microsoft",
      title: "Programming With C#",
      link: "https://coursera.org/share/7583fb342e85fed1ec347998fe1a0769",
    },
    {
      img: MS7,
      org: "Microsoft",
      title: "Web Development",
      link: "https://coursera.org/share/f8d2a2ba72a72f7b58246e974d78f771",
    },
    {
      img: Meta1,
      org: "Meta",
      title: "Programming JavaScript",
      link: "https://coursera.org/share/d349293ac8b95f07e3415d82f234e8af",
    },
    {
      img: Meta2,
      org: "Meta",
      title: "Front-End Developer",
      link: "https://coursera.org/share/b38baa8ec104eb3fdb28468b64c640a1",
    },
    {
      img: Meta7,
      org: "Meta",
      title: "Principles of UX/UI Design",
      link: "https://coursera.org/share/561f256ff04bace551cc5c39016d0e36",
    },
  ];

  const visibleCerts =
    innerWidth > 500
      ? showAll
        ? certs
        : certs.slice(0, 12)
      : showAll
      ? certs
      : certs.slice(0, 3);

  return (
    <Content>
      <section className="certs-container d-flex flex-column" id="certs">
        <SectionTitle title={t("certs.title")} />

        <div className="certs-content mt-5">
          {visibleCerts.map(({ img, org, title, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-item d-flex justify-content-center align-items-center flex-column text-decoration-none"
            >
              <img
                src={img}
                alt={t("certs.imageAlt", { title, org })}
                className="w-100 cert-img"
                loading="lazy"
              />
              <h5 className={`text-center mt-3 ${org.toLowerCase()}`}>
                <span className="mx-1">{org}</span> {title}
              </h5>
            </a>
          ))}
        </div>

        {certs.length > (innerWidth > 500 ? 12 : 3) && (
          <button
            className="mt-5 mx-auto"
            onClick={() => setShowAll(!showAll)}
            type="button"
          >
            {showAll ? t("certs.showLess") : t("certs.showMore")}
          </button>
        )}
      </section>
    </Content>
  );
};

export default React.memo(Certs);
