import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
}

// UI component Button
export const Button = ({ text }: Props) => {
  return <Wrapper type="submit">{text}</Wrapper>;
};

const Wrapper = styled.button`
  padding: 7px 48px;
  background: #000000;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  cursor: pointer;
  z-index: 5;
  position: relative;
  @media (max-width: 360px) {
    width: 100%;
    height: 40px;
  }
`;
