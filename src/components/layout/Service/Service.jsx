import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import "./index.css";
import {
  FaImage,
  FaImagePortrait,
  FaGears,
  FaDisease,
  FaMedapps,
  FaFigma,
  FaAtom,
  FaChartColumn,
  FaCloudMeatball,
} from "react-icons/fa6";

const Service = () => {
  return (
    <Content>
      <div className="service-container" id="services">
        <SectionTitle title="خـدمات من" />
        <div className="service-content mt-5 w-100">
          <div className="service-item">
            <FaAtom className="service-icon" />

            <h5>طراحی سایت اختصاصی - React.js.</h5>
          </div>
          <div className="service-item">
            <FaImage className="service-icon" />

            <h5>تبدیل طراحی فیگما و ... به کد پیکسل ‌پرفکت.</h5>
          </div>
          <div className="service-item">
            <FaImagePortrait className="service-icon" />

            <h5> وب ‌اپ (داشبورد - فروشگاه - ...).</h5>
          </div>{" "}
          <div className="service-item">
            <FaGears className="service-icon" />

            <h5>پروژه ‌های پیچیده (SPA/PWA با Next.js و SSR).</h5>
          </div>{" "}
          <div className="service-item">
            <FaDisease className="service-icon" />

            <h5>اضافه کردن فیچر جدید.</h5>
          </div>{" "}
          <div className="service-item">
            <FaMedapps className="service-icon" />

            <h5>بازاریابی الکترونیکی و سئو.</h5>
          </div>{" "}
          <div className="service-item">
            <FaFigma className="service-icon" />

            <h5>طراحی بنر و ... فیگما - ادوبی.</h5>
          </div>{" "}
          <div className="service-item">
            <FaChartColumn className="service-icon" />

            <h5>مدیریت پروژه و تیم های برنامه نویسی.</h5>
          </div>{" "}
          <div className="service-item">
            <FaCloudMeatball className="service-icon" />

            <h5>شبکه و مدیریت سرور.</h5>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Service;
