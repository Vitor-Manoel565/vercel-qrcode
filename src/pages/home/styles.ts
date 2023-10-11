import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #060606;
  width: 100vw;
  height: 100vh;
  position: relative;
  h1 {
    margin-bottom: 20px;
    color: ${COLORS.success};
  }
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #060606; */
  width: 300px;
  height: 300px;
  border: 1px solid ${COLORS.success};
  h1 {
    margin-bottom: 20px;
    color: ${COLORS.light};
  }
`;

export const ImageQrCode = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const ViewFinder = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid ${COLORS.success};
  margin-bottom: 20px;
`;
