import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
  box-sizing: border-box;
  overflow: hidden;  
  min-width: 0;
     
`;

export const CalTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CalText = styled.p`
 color: #94A6BE;
 font-size: 10px;
 margin-top: 14px;
 & span {
  color: ${({ theme }) => theme.colors.text};
 }
`