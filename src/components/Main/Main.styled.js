import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};`

export const MainContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;


`;
export const Loader = styled.div`
  text-align: center;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
`;
