import styled, { keyframes } from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  `

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

  @media (max-width: 768px) {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;

    gap: 16px;
    padding: 0 16px 80px;
  }
`;

export const NoTasksWrapper = styled.div`
 display: flex;
 flex-direction: column;
 margin: 0 auto;
 width: 350px;
 color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  text-align: center;
  padding: 40px;

`
export const NoTaskButton = styled.button`
  width: 132px;
  height: 30px;
  margin-top: 20px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  align-self: center;
  

  &:hover{
    background-color: #33399b;
  }
`

const dots = keyframes`
  0% { content: ""; }
  33% { content: "."; }
  66% { content: ".."; }
  100% { content: "..."; }
`;

export const LoaderText = styled.div`
  padding: 40px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};

  &::after {
    content: "";
    animation: ${dots} 1.4s infinite;
  }
`;
export const MobileCreateBtn = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    left: 16px;
    right: 16px;
    bottom: 16px;
    z-index: 2;

    height: 48px;
    border-radius: 8px;

    background-color: #565eef;
    color: #ffffff;
    border: none;

    font-size: 14px;
    font-weight: 500;
    line-height: 1;
  }

  &:hover {
    background-color: #33399b;
  }
`;