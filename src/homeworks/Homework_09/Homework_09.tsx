import { useState, useEffect } from "react";
import Button from "components/Button/Button";

import { PageWrapper, ContainerFacts, Card, Text } from "./styles";

function Homework_09() {
  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState<string>("");

  const getJoke = async () => {
    const response = await fetch(JOKE_URL, {
      method: "GET",
    });

    const result = await response.json();
    console.log("!!!!" + result);

    if (response.ok) {
      setJoke(result.setup + "\r\n" + result.punchline);
    } else {
      setJoke("Some Network Error");
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <Text>{joke} </Text>

        <Button name="Get new Joke" onClick={getJoke}></Button>
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
