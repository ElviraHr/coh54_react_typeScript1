import {type FormEvent, type ChangeEvent, useState, useEffect} from 'react'

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import {LoginFormContainer, InputsContainer, Title} from  "./styles";

function LoginForm() {

 // Пример работы с контролируемыми элементами на странице
  // const [inputValue, setInputValue] = useState<string>("");

  // const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   // event.taget.value - это то, что ввел пользователь с клавиатуры в input элементе
  //   setInputValue(event.target.value);
  // };

  const [email, setEmail] = useState<string>("");
  const [passward, setPassword] = useState<string>("");
  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login started");
  };

  return (
    <LoginFormContainer>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={passward}
          onChange={changePassword}
        />
      </InputsContainer>
      {/* <input value={inputValue} onChange={changeInputValue} > </input> */}
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}
export default LoginForm;