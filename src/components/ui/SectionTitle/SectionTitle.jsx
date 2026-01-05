import "./index.css";
import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <section
      className="section d-flex justify-content-center align-items-center align-items-lg-center justify-content-lg-start"
      aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
    >
      <h2
        className="section__title"
        id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
      >
        {title}
      </h2>
    </section>
  );
};

export default React.memo(SectionTitle);
