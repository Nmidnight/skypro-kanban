import styled from "styled-components";

export const PopUpCardWrap = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const PopUpCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopUpCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  position: relative;
`;

export const PopUpCardClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #94a6be;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000;
  }
`;

export const PopUpCardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin: 0 0 20px;
  color: #000;
`;

export const PopUpCardId = styled.div`
  margin-bottom: 20px;
  padding: 12px;
  background: #f0f0f0;
  border-radius: 6px;
  font-size: 14px;
  color: #666;

  b {
    color: #565eef;
    font-weight: 600;
  }
`;

export const PopUpCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PopUpCardField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PopUpCardLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;

export const PopUpCardValue = styled.div`
  font-size: 14px;
  color: #000;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 6px;
`;

export const PopUpCardTheme = styled.div`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${(props) => props.$bg || "#94a6be"};
  color: ${(props) => props.$color || "#ffffff"};
`;

