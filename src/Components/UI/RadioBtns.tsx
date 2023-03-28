import React from "react";
import styled from "styled-components";

interface IOption {
  value: string;
}

interface Props {
  options: IOption[];
  name: string;
  value?: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

// UI component RadioBtns
export const RadioBtns = ({ options, name, value, setValue }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      {options.map((el: IOption, i) => {
        return (
          <WrapperItem key={i}>
            <Label>
              <Input
                value={el.value}
                checked={el.value === value}
                onChange={onChange}
                type="radio"
                name={name}
              />
              <CustomRadio className="custom-radio"></CustomRadio>
              {el.value}
            </Label>
          </WrapperItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const WrapperItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-right: 20px;
  }
  margin-bottom: 14px;
`;
const WrapperItemText = styled.div`
  font-weight: 600;
`;
const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  &:checked + .custom-radio {
    background-image: url("images/radio.svg");
  }
`;
const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;
`;
const CustomRadio = styled.span`
  width: 13px;
  height: 14px;
  border-radius: 50%;
  background: #ebebeb;
  margin-right: 10px;
  position: relative;
`;
