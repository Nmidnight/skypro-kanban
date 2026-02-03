import styled from "styled-components";

export const PopBrowseWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
`
export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`
export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
`
export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`
export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`

export const PopBrowseTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;

  background-color: ${({ $bg }) => $bg};

`

export const TopicText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  
  color: ${({ $color }) => $color};
`;

export const PopBrowseStatusTtl = styled.div`
    margin-bottom: 11px;

    & p {
        margin-bottom: 14px;
    }
`
export const PopBrowseStatusWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`

export const PopBrowseFormWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`
export const PopBrowseFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`
export const TextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &:placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94a6be;
  letter-spacing: -0.14px;
  }
`

export const PopBrowseButtonsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 8px;

`
export const PopBrowseButtonGroup = styled.div`
  margin-right: 8px;
`
export const PopBrowseButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  margin-right: 8px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: ${({ $blueBG }) => ($blueBG ? "#565eef" : "transparent")};
  color: ${({ $blueBG }) => ($blueBG ? "#fff" : "#565eef")};

  &:hover {
    background-color: #33399b;
  }

`
export const PopBrowseInput = styled.input`
   width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`
export const PopBrowseStatus = styled.button`
  height: 36px;
  width: auto;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  background: ${({ $active }) => ($active ? "#94A6BE" : "transparent")};
  color: ${({ $active }) => ($active ? "#FFFFFF" : "#94A6BE")};

  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};

  &:hover {
    ${({ $disabled, $active }) =>
    !$disabled && !$active
      ? `
          border-color: #565EEF;
          color: #565EEF;
        `
      : ""}
  }
`;
export const PopBrowseCategoriesWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

export const PopBrowseCategoryItem = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;

  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;

  color: ${({ $active, $color }) =>
    $active ? $color : "rgba(148, 166, 190, 0.9)"};

  background: ${({ $active, $bg }) => ($active ? $bg : "transparent")};

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    cursor: default;
    opacity: 1;
  }
`;
