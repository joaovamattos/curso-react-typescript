import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  border: 0.75rem solid ${(props) => props.theme.colors.pink};
  border-top-color: ${(props) => props.theme.colors.black};
  animation: ${rotate} 2s linear infinite;
`;
