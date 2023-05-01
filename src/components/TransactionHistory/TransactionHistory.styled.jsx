import styled from "styled-components";

export const Table = styled.table`
  border-style: hidden;
  border-collapse: collapse;
  border-radius: 7px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgComponent};
  box-shadow: ${({ theme }) => theme.shadow.shadowComponent};
`;

export const TableHead = styled.thead`
  background-color: #07bdd5;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bgComponent};
`;

const CellBorder = () => `
  border-left: 1px solid #e2e7e9;
`;

export const TableRowHead = styled.tr``;

export const TableHeadCell = styled.th`
  padding-top: 15px;
  padding-bottom: 15px;
  ${CellBorder}
`;

export const TableBody = styled.tbody``;

export const TableRowBody = styled.tr`
  text-align: center;

  &:nth-of-type(even) {
    background-color: #ecf1f3;
  }
`;

export const TableBodyCell = styled.td`
  width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${({ theme }) => theme.colors.secondText};
  ${CellBorder}

  &:first-of-type {
    text-align: left;
    text-indent: 35%;
  }
`;
