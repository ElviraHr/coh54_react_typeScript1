import { type FormEvent, type ChangeEvent, useState, useEffect } from "react";
//Шаг 1: импортируем хук useFormik из библиотеки Formik
import { useFormik } from "formik";
import * as Yup from "yup"; //импортируем все, что есть в библиотеке, иначе не работает
import { LOGIN_FORM_VALUES } from "./types";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LoginFormContainer, InputsContainer, Title } from "./styles";

function LoginForm() {
  // Пример работы с контролируемыми элементами на странице
  // const [inputValue, setInputValue] = useState<string>("");

  // const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   // event.taget.value - это то, что ввел пользователь с клавиатуры в input элементе
  //   setInputValue(event.target.value);
  // };
  //////////////////////////////////////////////////// kod do formik
  // const [email, setEmail] = useState<string>("");
  // const [passward, setPassword] = useState<string>("");
  // const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };
  // const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const login = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Login started");
  // };
  ////////////////////////////////////////////////////////////////////////////
  //  валидация с помощью Yup
  const validationShema = Yup.object().shape({
    [LOGIN_FORM_VALUES.EMAIL] :Yup.string()
    .required("E-mail field is required")
    .email("This field shuld be to email-format"),
    [LOGIN_FORM_VALUES.PASSWORD]:Yup.string()
    .required("Password field is required")
    .min(5, "Password field should contain minimum 5 characters")
    .max(15, "Password field should contain maximum 15 characters")
  })
  /////////////////////////////////////////////////////////////////////////////
  //useFormik возвращает объект, в котором прописаны необходимые данные о форме и вспомогательные функции для работы с формой
  //useFormik принимает в качестве агрумента объект, он является обязательным
  //объект, который мы передаем useFormik нужен для настройки объекта, который возвращает хук useFormik
  //объект, который мы передаем useFormik имеет два обязательных ключа:
  //1. initialValues: принимает в качестве значения объект: (неймы инпутов)
  //в качестве ключа - значение атрибута name в элементах формы,
  //в качестве значения ключа - значения по-умолчанию, которое будет при первоначальной инициализации.
  //2. onSubmit - функция, которая вызывается на событие submit при клике на кнопку с type = submit.

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema: validationShema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, heplers) => {
      //values = объект, ключи - значения атрибутов name, значения - то, что ввел пользователь 
     console.log(values);
     console.log(heplers);
     //helpers - вспомогательные функции которые мы можем использовать во время submit
     //heplers.resetForm();  - очищает форму, возвращает значения по умолчанию
     //heplers.resetForm(); 
      console.log("Submit from formik works!");

    },
  });
  console.log(formik);
  return (
    //formik.handleSubmit - вызывает функцию которую прописали в onSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
       
          placeholder="Enter your email"
          label="Email"
          //formik.values.email - получает значение, которое пользователь ввел с клавиатуры в это поле, контролируемый элемент
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          //formik.handleChange - отрабатывает на нажатие пользователя и записывает данные в formik.values.email - контролируемый элемент
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
          
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>
      {/* <input value={inputValue} onChange={changeInputValue} > </input> */}
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}
export default LoginForm;
