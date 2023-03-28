import React from "react";
import styled, { css } from "styled-components";

interface Props {
  labelValue?: string;
  isActive?: boolean;
  inputType?: InputType;
  placeholder?: string;
  value?: string;
  onChange?: any;
}

// UI component Input
export const Input = ({
  labelValue,
  inputType = "default",
  placeholder,
  isActive,
  value,
  onChange,
}: Props) => {
  return (
    <Wrapper isActive={isActive} inputType={inputType}>
      {labelValue}
      <InputWrapper
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={"text"}
      />
    </Wrapper>
  );
};
const Wrapper = styled.label<Props>`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #8d8d8d;
  width: 278px;
  ${({ inputType }) => {
    if (inputType === "fullwidth") {
      return css`
        width: 100%;
      `;
    }
  }}
  ${({ isActive }) => {
    if (isActive) {
      return css`
        color: #000;
      `;
    }
  }}
`;
const InputWrapper = styled.input`
  border: none;
  margin-bottom: 20px;
  outline: none;
  padding: 10px 0px;
  width: 100%;
  display: block;
  border-bottom: 1px solid #000;
`;

type InputType = "fullwidth" | "default";
