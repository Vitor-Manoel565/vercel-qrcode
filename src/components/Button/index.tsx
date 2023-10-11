import React from "react";
import * as S from "./styles";

interface IButtonProps {
  text: string;
  onClick: () => void;
  width?: string;
  minWidth?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  width,
  minWidth,
  backgroundColor,
  borderRadius,
  border,
}) => {
  return (
    <S.Button
      minWidth={minWidth}
      width={width}
      onClick={onClick}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
    >
      {text}
    </S.Button>
  );
};
