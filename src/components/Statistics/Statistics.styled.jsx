import styled from "styled-components";

export const StatContainer = styled.section`
  width: 400px;

  overflow: hidden;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.bgComponent};
  box-shadow: ${({ theme }) => theme.shadow.shadowComponent};
`;

export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 34px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainText};
  text-transform: uppercase;
  text-align: center;
`;

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-flow: columns;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.bgComponent};
`;

export const StatListItem = styled.ul`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 500;
`;
