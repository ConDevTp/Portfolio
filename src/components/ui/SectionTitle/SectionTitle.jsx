import "./index.css";

const SectionTitle = ({ title }) => {
  return (
    <section className="section d-flex justify-content-center align-items-center align-items-lg-center justify-content-lg-start">
      <h2 className="section__title">{title}</h2>
    </section>
  );
};

export default SectionTitle;
