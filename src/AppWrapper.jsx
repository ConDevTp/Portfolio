import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useParams } from "react-router";
import App from "./App";

const AppWrapper = () => {
  const { lng } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng && (lng === "fa" || lng === "en")) {
      i18n.changeLanguage(lng);
      document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = lng;
    }
  }, [lng, i18n]);

  if (!lng || (lng !== "fa" && lng !== "en"))
    return <Navigate to="/fa" replace />;

  return (
    <Suspense fallback={<div className="loading">{t("app.loading")}</div>}>
      <App />
    </Suspense>
  );
};

export default AppWrapper;
