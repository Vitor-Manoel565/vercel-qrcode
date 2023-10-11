import styled from "styled-components";
import { COLORS } from "../../theme/colors";
import { FONTSIZE } from "../../theme/fonts";

export const Button = styled.button<{
  width?: string;
  minWidth?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
}>`
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || "320px"};
  height: 50px;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "6px"};
  background-color: ${(props) => props.backgroundColor || COLORS.primary};
  color: ${COLORS.light};
  font-size: ${FONTSIZE.sm};
  font-weight: 600;
  cursor: pointer;
`;
