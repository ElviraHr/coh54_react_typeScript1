import styled from "@emotion/styled";

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 590px;
  min-height: 450px;
  max-height: fit-content;
  border: 1px solid #000000;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
  gap: 30px;
`;

export const Title = styled.p`
  color: #000000;
  font-size: 24px;
  font-weight: normal;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: black;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

export const ContainerFacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;