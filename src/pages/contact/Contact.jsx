import React, { useContext } from "react";

import { LanguageContext } from "../../context/LanguageProvider";

import RippleButton from "../../components/rippleButton/RippleButton";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Importing styles
import styles from "./contact.module.scss";
import content from "../../locales/content";
import Aos from "aos";
import { useDeviceInfo } from "../../context/DeviceInfo";

const Contact = () => {
  const { dictionary } = useContext(LanguageContext);
  const contentData = dictionary.pages.contact;
  const { device } = useDeviceInfo();

  Aos.init({
    delay: 300,
  });

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(
      contentData.form.validations.fullNameRequired
    ),
    email: Yup.string()
      .email(contentData.form.validations.emailInvalid)
      .required(contentData.form.validations.emailRequired),
    phoneNumber: Yup.number().positive().required(
      contentData.form.validations.phoneNumberRequired
    ),
    message: Yup.string().trim().required(
      contentData.form.validations.messageRequired
    ),
  });

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "+998",
    message: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className={styles.contact}>
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <div className={styles.header_info} data-aos="zoom-out">
            <p className={styles.text}>{contentData.text}</p>
            <h1 className={styles.title}>{contentData.title}</h1>
            <div className={styles.img_wrapper}>
              <img
                src={content.contact.form.img}
                alt="Contact form"
                className={styles.iamge}
              />
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className={styles.contact_form}>
                <div className={styles.wrapper} data-aos="fade-left">
                  <label htmlFor="fullName" className={styles.form_label}>
                    {contentData.form.fullName}
                  </label>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`${styles.form_input} ${
                      errors.fullName && touched.fullName
                        ? styles.input_error
                        : ""
                    }`}
                    placeholder="John Doe"
                  />
                  <p className={`${touched.fullName && errors.fullName && styles.error}`}>{errors.fullName ? errors.fullName : "Full Name"}</p>
                </div>

                <div
                  className={styles.wrapper}
                  data-aos="fade-left"
                  data-aos-delay={device === "Android" || device === 'iOS' ? "0" : "500"}
                >
                  <label htmlFor="email" className={styles.form_label}>
                    {contentData.form.email}
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={`${styles.form_input} ${
                      errors.email && touched.email ? styles.input_error : ""
                    }`}
                    placeholder="example@gmail.com"
                  />
                  <p className={`${touched.email && errors.email && styles.error}`}>{errors.email ? errors.email : "Email"}</p>
                </div>

                <div
                  className={styles.wrapper}
                  data-aos="fade-left"
                  data-aos-delay={device === "Android" || device === 'iOS' ? "0" : "700"}
                >
                  <label htmlFor="phoneNumber" className={styles.form_label}>
                    {contentData.form.phoneNumber}
                  </label>
                  <Field
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className={`${styles.form_input} ${
                      errors.phoneNumber && touched.phoneNumber
                        ? styles.input_error
                        : ""
                    }`}
                    placeholder="+998 90 123 45 67"
                  />
                  <p className={`${touched.phoneNumber && errors.phoneNumber && styles.error}`}>{errors.phoneNumber ? errors.phoneNumber : "Phone Number"}</p>
                </div>

                <div
                  className={styles.wrapper}
                  data-aos="fade-left"
                  data-aos-delay={device === "Android" || device === 'iOS' ? "0" : "900"}
                >
                  <label htmlFor="message" className={styles.form_label}>
                    {contentData.form.message}
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className={`${styles.form_input} ${
                      errors.message && touched.message
                        ? styles.input_error
                        : ""
                    }`}
                    placeholder="Hello Musa Code"
                  />
                  <p className={`${touched.message && errors.message && styles.error}`}>{errors.message ? errors.message : "Message"}</p>
                </div>

                <RippleButton button type="submit" disabled={isSubmitting}>
                  {contentData.form.btn}
                </RippleButton>
              </Form>
            )}
          </Formik>
        </div>
      </header>
    </div>
  );
};

export default Contact;
