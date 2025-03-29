import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  position: relative;
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.1;
  pointer-events: none;
`;

export const Content = styled.main`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
