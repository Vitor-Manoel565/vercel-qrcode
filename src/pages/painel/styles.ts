import styled from "styled-components";
import { COLORS } from "../../theme/colors";

export const ContainerTableResponsive = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  padding: 20px;
  width: 100vw;
`;

export const InputSearch = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${COLORS.dark};
  border-radius: 4px;
  margin-bottom: 20px;
  // remove line in click
  outline: none;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* Total scrollbar width */
  &::-webkit-scrollbar {
    width: 12px; // Width of the scrollbar
  }

  /* Background of the scrollbar except the button or thumb */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Scrollbar thumb */
  &::-webkit-scrollbar-thumb {
    background: #888;

    /* Rounded corners on the scrollbar thumb */
    border-radius: 6px;

    /* Creates a border around the thumb */
    border: 3px solid #f1f1f1;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    border: 0;

    th,
    td {
      padding: 0.5rem;
      display: block;
    }

    tr {
      margin-bottom: 0.5rem;
      display: block;
    }

    th {
      display: none;
    }

    td {
      text-align: right;
      position: relative;

      &::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: fit-content;
        padding-left: 1rem;
        font-weight: bold;
        text-align: left;
      }

      //ultimo td tera um border-radius de 1rem
      &:last-child {
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
      }
    }
  }
`;

export const Th = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid ${COLORS.dark};
  background-color: ${COLORS.primary};
`;

export const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid ${COLORS.dark};
  gap: 1rem;
`;

export const Tr = styled.tr`
  background-color: ${COLORS.grayDark};
  border-radius: 1rem;
  color: ${COLORS.light};
  &:hover {
    background-color: ${COLORS.grayDot};
    color: ${COLORS.light};
  }
`;
