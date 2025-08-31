import { useState, useEffect } from "react";
import Button from "components/Button/Button";
import axios from "axios";

import { PageWrapper, ContainerFacts, Card, Text } from "./styles";

function Homework_09() {
  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState<string>("");
  let err: boolean = false;

  ///////////////////////////////////
  // пример запроса через библиотеку npm install axios
  const getJoke = async () => {


    try {
    const response = await axios.get(JOKE_URL);
    const data = response.data;

    console.log(response);
  } catch (error) {

  }finally{

  }

  //////////////////////////////////////
  //   пример запроса через Fetch
  //   const getJoke = async () => {
  //     const response = await fetch(JOKE_URL, {
  //       method: "GET",
  //     });

  //     const result = await response.json();
  //     console.log("!!!!" + result);

  //     if (response.ok) {
  //       setJoke(result.setup + "\n" + result.punchline);
  //     } else {
  //       setJoke("Some Network Error");
  //       err = true;
  //     }
   };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card $error={err}>
        <Text $error={err}>{joke} </Text>

        <Button name="Get new Joke" onClick={getJoke}></Button>
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
