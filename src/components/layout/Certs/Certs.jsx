import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";

import IBM1 from "../../../assets/img/IBM/1.jpg";
import IBM2 from "../../../assets/img/IBM/2.jpg";
import IBM3 from "../../../assets/img/IBM/3.jpg";
import IBM4 from "../../../assets/img/IBM/4.jpg";
import IBM5 from "../../../assets/img/IBM/5.jpg";
import IBM6 from "../../../assets/img/IBM/6.jpg";
import IBM7 from "../../../assets/img/IBM/7.jpg";
import IBM8 from "../../../assets/img/IBM/8.jpg";
import IBM9 from "../../../assets/img/IBM/9.jpg";
import IBM10 from "../../../assets/img/IBM/10.jpg";

import MS1 from "../../../assets/img/Microsoft/1.jpg";
import MS2 from "../../../assets/img/Microsoft/2.jpg";
import MS3 from "../../../assets/img/Microsoft/3.jpg";
import MS4 from "../../../assets/img/Microsoft/4.jpg";
import MS5 from "../../../assets/img/Microsoft/5.jpg";

import Meta1 from "../../../assets/img/Meta/1.jpg";
import Meta2 from "../../../assets/img/Meta/2.jpg";
import Meta3 from "../../../assets/img/Meta/3.jpg";
import Meta4 from "../../../assets/img/Meta/4.jpg";
import Meta5 from "../../../assets/img/Meta/5.jpg";
import Meta6 from "../../../assets/img/Meta/6.jpg";
import Meta7 from "../../../assets/img/Meta/7.jpg";
import { useState } from "react";

const Certs = () => {
  const [showAll, setShowAll] = useState(false);
  const certs = [
    { img: IBM5, org: "IBM", title: "Front-End Developer" },
    { img: MS2, org: "Microsoft", title: "Front-End Developer" },
    { img: Meta6, org: "Meta", title: "Front-End Developer" },

    { img: IBM1, org: "IBM", title: "HTML, CSS, & JavaScript" },
    { img: IBM2, org: "IBM", title: "Software Developer" },
    { img: IBM3, org: "IBM", title: "Web and Front-End Development" },

    { img: MS3, org: "Microsoft", title: "Web Application Security" },
    { img: MS4, org: "Microsoft", title: "UI/UX Design Principles" },
    { img: MS5, org: "Microsoft", title: "Blazor for Front-End" },

    { img: Meta3, org: "Meta", title: "Advanced React" },
    { img: Meta4, org: "Meta", title: "HTML & CSS in depth" },
    { img: Meta5, org: "Meta", title: "Version Control" },

    { img: IBM4, org: "IBM", title: "Software Engineering" },
    { img: IBM6, org: "IBM", title: "Designing User (UI/UX)" },
    { img: IBM7, org: "IBM", title: "Front-End with Bootstrap" },
    { img: IBM8, org: "IBM", title: "Cloud Native, DevOps, Agile, NoSQL" },
    { img: IBM9, org: "IBM", title: "Git and GitHub" },
    { img: IBM10, org: "IBM", title: "Front-End and Web Development" },

    { img: MS1, org: "Microsoft", title: "Coding Front-End" },
    { img: Meta1, org: "Meta", title: "Programming JavaScript" },
    { img: Meta2, org: "Meta", title: "Front-End Developer" },
    { img: Meta7, org: "Meta", title: "Principles of UX/UI Design" },
  ];
  const visibleCerts = showAll ? certs : certs.slice(0, 12);

  return (
    <Content>
      <div className="certs-container d-flex flex-column" id="certs">
        <SectionTitle title="مـــدارک" />
        <div className="certs-content mt-5">
          {visibleCerts.map(({ img, org, title }, i) => (
            <div
              key={i}
              className="cert-item d-flex justify-content-center align-items-center flex-column"
            >
              <img
                src={img}
                alt={`${org} Certificate ${title}`}
                className="w-100"
              />
              <h5 className={org.toLowerCase()}>
                <span className="mx-1">{org}</span> {title}
              </h5>
            </div>
          ))}
        </div>
        <button className="mt-5 mx-auto" onClick={() => setShowAll(!showAll)}>
          {showAll ? "مشاهده کمتر" : "مشاهده بیشتر"}
        </button>
      </div>
    </Content>
  );
};

export default Certs;
