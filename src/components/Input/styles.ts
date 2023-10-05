import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input<{
  width?: string;
  minWidth?: string;
}>`
  width: ${(props) => props.width || "100%"};
  height: 40px;
  border: 1px solid ${COLORS.gray};
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  outline: none;
  font-weight: 600;
  border: 1px solid ${COLORS.primary};
`;
