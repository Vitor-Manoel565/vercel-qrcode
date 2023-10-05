import React from "react";
import * as S from "./styles";

interface IButtonProps {
  text: string;
  onClick: () => void;
  width?: string;
  minWidth?: string;
}

export const Button: React.FC<IButtonProps> = ({ text, onClick, width, minWidth }) => {
  return <S.Button minWidth={minWidth} width={width} onClick={onClick}>{text}</S.Button>;
};
