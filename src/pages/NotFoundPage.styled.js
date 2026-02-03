import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

export const pulse = keyframes`
  0% { opacity: 0.55; transform: scale(0.98); }
  50% { opacity: 0.85; transform: scale(1); }
  100% { opacity: 0.55; transform: scale(0.98); }
`;

export const Page = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;

  background: radial-gradient(1200px 600px at 30% 20%, rgba(148, 166, 190, 0.25), transparent 60%),
    radial-gradient(900px 500px at 80% 70%, rgba(255, 109, 0, 0.18), transparent 55%),
    #f6f7fb;
`;

export const Card = styled.section`
  width: min(720px, 100%);
  padding: 28px;
  border-radius: 20px;

  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);

  border: 1px solid rgba(148, 166, 190, 0.25);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 8px 12px;
  border-radius: 999px;

  background: rgba(148, 166, 190, 0.18);
  border: 1px solid rgba(148, 166, 190, 0.25);
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;

  background: #ff6d00;
  box-shadow: 0 0 0 6px rgba(255, 109, 0, 0.18);
  animation: ${pulse} 2.2s ease-in-out infinite;
`;

export const BadgeText = styled.span`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.65);
`;

export const Code = styled.h1`
  margin: 0;
  font-weight: 800;
  letter-spacing: -0.06em;
  line-height: 1;

  font-size: clamp(64px, 8vw, 104px);

  /* градиентный текст */
  background: linear-gradient(90deg, #0b6cff, #ff6d00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${float} 3s ease-in-out infinite;
`;

export const Body = styled.div`
  margin-top: 14px;
`;

export const Title = styled.h2`
  margin: 0 0 8px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.88);
`;

export const Text = styled.p`
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;
  border-radius: 12px;
  text-decoration: none;

  background: #0b6cff;
  color: #fff;

  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 18px rgba(11, 108, 255, 0.25);
  }

  &:active {
    transform: translateY(0);
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.button`
  padding: 10px 16px;
  border-radius: 12px;
  cursor: pointer;

  border: 1px solid rgba(148, 166, 190, 0.35);
  background: rgba(255, 255, 255, 0.6);
  color: rgba(0, 0, 0, 0.78);

  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.8);
  }

  &:active {
    transform: translateY(0);
  }
`;
