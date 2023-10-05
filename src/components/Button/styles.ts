import styled from "styled-components";
import { COLORS } from "../../theme/colors";
import { FONTSIZE } from "../../theme/fonts";

export const Button = styled.button<{
  width?: string;
  minWidth?: string;
}>`
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.minWidth || "320px"};
  height: 50px;
  border: none;
  border-radius: 6px;
  background-color: ${COLORS.primary};
  color: ${COLORS.light};
  font-size: ${FONTSIZE.sm};
  font-weight: 600;
  cursor: pointer;
`;
