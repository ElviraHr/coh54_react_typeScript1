import { useState, useEffect } from "react";
import Button from "components/Button/Button";

import { PageWrapper, ContainerFacts, Card, Text } from "./styles";

function Homework_09() {
  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState<string>("");
  let err :boolean = false;

  const getJoke = async () => {
    const response = await fetch(JOKE_URL, {
      method: "GET",
    });

    const result = await response.json();
    console.log("!!!!" + result);

    if (response.ok) {
      setJoke(result.setup + "\n" + result.punchline);
    } else {
      setJoke("Some Network Error");
      err = true;
    }
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
