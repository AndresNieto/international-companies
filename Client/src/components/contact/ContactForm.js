import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContactInfo } from "../../actions/contactActions";
import { useFormik } from "formik";
import * as Yup from "yup";
import Spinner from "../../UI/Spinner";

const ContactForm = () => {
  const dispatch = useDispatch();

  const { sendingInfo, infoSent, errorSending } = useSelector(
    (state) => state.contact
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(255, "Your firstName is too large")
        .required("Please write down your first name"),
      lastName: Yup.string()
        .max(255, "Your last name is too large")
        .required(" Please write down your last name"),
      email: Yup.string()
        .max(255, "Your email is too large")
        .email("The email is incorrect")
        .required("Don’t forget to tell us what your email address is"),
      subject: Yup.string()
        .max(500, "Your subject is too large")
        .required("Don’t forget to write something to use!"),
    }),
    onSubmit: (values, { resetForm }) => {
      let contactJSON = JSON.stringify(values, null, 2);
      dispatch(sendContactInfo(contactJSON));
      resetForm();
    },
  });

  return (
    <div className="w-50 contact-container__form-container">
      {infoSent ? (
        <div className="alert alert-success">Your data has been send</div>
      ) : null}
      {errorSending ? (
        <div className="alert alert-danger">Error sending data</div>
      ) : null}

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mb-5">
          <input
            id="firstName"
            className={
              formik.errors.firstName && formik.touched.firstName
                ? "form-control contact-container__error-form"
                : "form-control"
            }
            placeholder="Your name…"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <span>{formik.errors.firstName}</span>
          ) : null}
        </div>
        <div className="form-group mb-5">
          <input
            id="lastName"
            className={
              formik.errors.lastName && formik.touched.lastName
                ? "form-control contact-container__error-form"
                : "form-control"
            }
            placeholder="Your last name…"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <span>{formik.errors.lastName}</span>
          ) : null}
        </div>
        <div className="form-group mb-5">
          <input
            id="email"
            className={
              formik.errors.email && formik.touched.email
                ? "form-control contact-container__error-form"
                : "form-control"
            }
            placeholder="Your email address…"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="form-group mb-5">
          <textarea
            id="subject"
            className={
              formik.errors.subject && formik.touched.subject
                ? "form-control subject-form contact-container__error-form"
                : "form-control subject-form"
            }
            placeholder="Let us know your concerns!"
            name="subject"
            type="text"
            rows={5}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          ></textarea>
          {formik.touched.subject && formik.errors.subject ? (
            <span>{formik.errors.subject}</span>
          ) : null}
        </div>
        <div className="form-group float-right">
          <button
            className="submit-button"
            type="submit"
            disabled={!formik.isValid}
          >
            Submit
          </button>
        </div>
        {sendingInfo ? (
          <div className="form-group text-center">
            <Spinner />
          </div>
        ) : null}
      </form>
    </div>
  );
};

ContactForm.propTypes = {};
export default ContactForm;
