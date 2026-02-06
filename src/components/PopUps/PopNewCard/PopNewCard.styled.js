import styled from "styled-components";

export const NewCardWrapper = styled.div`
  width: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;

  @media (max-width: 768px) {
    position: static;
    min-width: 100%;
    z-index: auto;
  }
`;

export const NewCardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding: 0;
    align-items: stretch;
    justify-content: flex-start;
    background: transparent;
  }
`;

export const NewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 20px 16px 24px;
    border-radius: 0;
    border: none;
  }
`;

export const NewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const NewCardTTtl = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const NewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const NewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 0;
  }
`;

export const NewCardFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;

  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  color: ${({ theme }) => theme.colors.text};
  margin: 20px 0;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px; 
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media (max-width: 768px){
    height: 37px;
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;

  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  color: ${({ theme }) => theme.colors.text};

  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  resize: none;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 37px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px; 
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const NewCardCategories = styled.div`
  margin-bottom: 20px;
`;

export const CategoryDescription = styled.p`
  margin-bottom: 14px;
`;

export const CategoryThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;

  @media (max-width: 768px) {
    margin-right: 0;
    font-size: 14px;
  }

  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  &:hover {
    background-color: #33399b;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    float: none;
  }
`;
