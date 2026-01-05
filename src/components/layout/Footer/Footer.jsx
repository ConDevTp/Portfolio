import "./index.css";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const rightsText = t("footer.rights");

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <small>
            {rightsText.split("<brand>")[0]}
            <span>Con Dev</span>
            {rightsText.split("</brand>")[1]}
          </small>

          <small className="mt-2" aria-label={t("footer.ariaCopyright")}>
            {t("footer.copyright")}
          </small>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
