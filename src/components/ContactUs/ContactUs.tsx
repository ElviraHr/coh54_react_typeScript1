import { type FormEvent, type ChangeEvent, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; //импортируем все, что есть в библиотеке, иначе не работает
import { CONTACTUS_FORM_VALUES } from "./types";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";

function ContactUs() {
  const validationShema = Yup.object().shape({
    [CONTACTUS_FORM_VALUES.EMAIL]: Yup.string()
      .required("E-mail field is required")
      .email("This field should be to email-format")
      .min(6, "E-mail field should contain minimum 6 characters")
      .max(60, "E-mail field should contain maximum 60 characters"),
    [CONTACTUS_FORM_VALUES.FULLNAME]: Yup.string()
      .required("Full name field is required")
      .min(3, "Full name field should contain minimum 3 characters")
      .max(50, "Full name field should contain maximum 50 characters"),
    [CONTACTUS_FORM_VALUES.PHONE]: Yup.string()
      .required("Phone field is required")
      .min(4, "Phone field should contain minimum 4 characters")
      .max(20, "Phone field should contain maximum 20 characters"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACTUS_FORM_VALUES.EMAIL]: "",
      [CONTACTUS_FORM_VALUES.FULLNAME]: "",
      [CONTACTUS_FORM_VALUES.PHONE]: "",
    },
    validationSchema: validationShema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, heplers) => {
      console.log(values);
    },
  });

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title> Contact us</Title>
      <InputsContainer>
        <Input
          id="fullName-id"
          name={CONTACTUS_FORM_VALUES.FULLNAME}
          placeholder="Your full name"
          label="Full name"
          value={formik.values[CONTACTUS_FORM_VALUES.FULLNAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACTUS_FORM_VALUES.FULLNAME]}
        />
        <Input
          id="phone-id"
          name={CONTACTUS_FORM_VALUES.PHONE}
          placeholder="Your phone number"
          label="Phone"
          value={formik.values[CONTACTUS_FORM_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACTUS_FORM_VALUES.PHONE]}
        />
        <Input
          id="email-id"
          name={CONTACTUS_FORM_VALUES.EMAIL}
          placeholder="Your e-mail"
          label="Email"
          value={formik.values[CONTACTUS_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACTUS_FORM_VALUES.EMAIL]}
        />
      </InputsContainer>
      <Button name="SEND REQUEST" type="submit" />
    </LoginFormContainer>
  );
}

export default ContactUs;
