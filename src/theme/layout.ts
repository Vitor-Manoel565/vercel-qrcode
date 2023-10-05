import styled from "styled-components";

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
}>`
  display: ${(props) => props.display || null};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
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
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  right: ${(props) => props.right || "0"};
  bottom: ${(props) => props.bottom || "0"};
  gap: ${(props) => props.gap || "0"};
  border: ${(props) => props.border || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};
`;

export const LogoUVP = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
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
