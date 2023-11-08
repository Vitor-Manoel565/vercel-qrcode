import styled from "styled-components";
import { IoWarningOutline } from "react-icons/io5";
import { BiCheckCircle } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { COLORS } from "./colors";

export const Container = styled.div<{
  width?: string;
  height?: string;
  flexDirection?: "row" | "column";
  justifyContent?: string;
  backgroundColor?: string;
  alignItems?: string;
  padding?: string;
  display?: string;
  borderRadius?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  gap?: string;
  border?: string;
  borderBottom?: string;
  margin?: string;
}>`
  display: ${(props) => props.display || null};
  flex-direction: ${(props) => props.flexDirection || null};
  justify-content: ${(props) => props.justifyContent || null};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.backgroundColor || null};
  align-items: ${(props) => props.alignItems || "flex-start"};
  padding: ${(props) => props.padding || "0"};
  border-radius: ${(props) => props.borderRadius || "0"};
  min-width: ${(props) => props.minWidth || "0"};
  min-height: ${(props) => props.minHeight || "0"};
  max-width: ${(props) => props.maxWidth || null};
  max-height: ${(props) => props.maxHeight || null};
  position: ${(props) => props.position || null};
  top: ${(props) => props.top || "unset"};
  left: ${(props) => props.left || "unset"};
  right: ${(props) => props.right || "unset"};
  bottom: ${(props) => props.bottom || "unset"};
  gap: ${(props) => props.gap || "unset"};
  border: ${(props) => props.border || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  margin: ${(props) => props.margin || "0"};
`;

export const LogoUVP = styled.img`
  width: 60px;
  height: 60px;
`;

export const Figcaption = styled.figcaption<{
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}>`
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export const IconWarning = styled(IoWarningOutline)`
  width: 40px;
  height: 40px;
  color: ${COLORS.warning};
`;

export const IconSuccess = styled(BiCheckCircle)`
  width: 40px;
  height: 40px;
  color: ${COLORS.success};
`;

export const IconFail = styled(IoIosCloseCircleOutline)`
  width: 40px;
  height: 40px;
  color: ${COLORS.alert};
`;

export const Navbar = styled.div`
  width: 100vw;
  height: 80px;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 40px;
`;
