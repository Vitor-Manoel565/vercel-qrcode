import React from "react";
import * as S from "./styles";

interface IinputProps {
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  width?: string;
  minWidth?: string;
}

export const Input: React.FC<IinputProps> = ({
  placeholder,
  onChange,
  value,
  type,
  width,
  minWidth,
}) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      width={width}
      minWidth={minWidth}
    />
  );
};
