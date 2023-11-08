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
  disabled?: boolean;
  color?: string;
  fontSize?: string;
}

export const Button: React.FC<IButtonProps> = ({
  text,
  color,
  onClick,
  width,
  minWidth,
  backgroundColor,
  borderRadius,
  border,
  disabled,
  fontSize,
}) => {
  return (
    <S.Button
      minWidth={minWidth}
      width={width}
      onClick={onClick}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      border={border}
      disabled={disabled}
      color={color}
      textSize={fontSize}
    >
      {text}
    </S.Button>
  );
};
