import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Content from "../Content/Content";
import ConDevLogo from "../../../assets/img/logo-condev.svg";
import emailjs from "@emailjs/browser";
import "./index.css";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("نام را وارد کنید."),
      lastName: Yup.string().required("نام خانوادگی را وارد کنید."),
      email: Yup.string()
        .email("ایمیل معتبر نیست")
        .required("ایمیل الزامی است"),
      subject: Yup.string().required("موضوع را وارد کنید."),
      message: Yup.string().required("متن پیام را وارد کنید."),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_gfvql2j",
          "template_f7r8d8h",
          values,
          "jc3hw9Mqc76nyml5u"
        )
        .then(
          () => {
            toast.success("پیام شما با موفقیت ارسال شد!");
            resetForm();
          },
          (error) => {
            toast.error("ارسال پیام با خطا مواجه شد - لطفا مجدد تلاش کنید. ");
          }
        );
    },
  });

  const handleErrors = () => {
    const errors = formik.errors;
    const firstError = Object.keys(errors)[0];
    if (firstError) toast.error(errors[firstError]);
  };

  return (
    <Content>
      <div className="contact-container" id="contact">
        <SectionTitle title="تماس با من" />
        <div className="contact-content mt-5 d-flex justify-content-center align-items-center flex-column">
          <img
            src={ConDevLogo}
            alt="Con Dev - Arash Ch"
            className="condev-logo-contact mt-3 pt-2 pt-md-0 mt-md-5"
          />
          <div className="w-100 mt-4 pt-2 pt-lg-0 mt-md-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!formik.isValid) handleErrors();
                formik.handleSubmit();
              }}
              className="d-flex flex-column align-items-center justify-content-center w-100 contact-form  mt-md-4 mx-auto"
            >
              <h3 className="mt-4 pt-2">پیام خود را بنویسید!</h3>
              <input
                type="text"
                placeholder="نام"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              <input
                type="text"
                placeholder="نام خانوادگی"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              <input
                type="email"
                placeholder="ایمیل"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <input
                type="text"
                placeholder="موضوع"
                name="subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              <textarea
                placeholder="متن پیام ..."
                className="mb-3"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              <button type="submit" className="mt-5">
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="colored" />
    </Content>
  );
};

export default Contact;
