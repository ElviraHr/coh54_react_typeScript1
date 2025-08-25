import styled from "@emotion/styled";

interface IsError {
  $error: boolean;
}

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const Text = styled.p<IsError>`
  font-size: 20px;
  color: ${({ $error }) => ($error ? "red" : "black")};
`;
export const Card = styled.div<IsError>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: ${({ $error }) => ($error ? "1px solid red" : "1px solid black")};
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