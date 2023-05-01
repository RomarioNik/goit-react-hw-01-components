import styled from "styled-components";

export const ListItem = styled.li`
  width: 300px;
  padding: 15px;
  display: flex;
  gap: 15px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.bgComponent};
  box-shadow: ${({ theme }) => theme.shadow.shadowComponent};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const setBgColor = (props) => {
  return props.status ? "green" : "red";
};

export const Indikator = styled.span`
  width: 20px;
  height: 20px;
  align-self: center;
  border-radius: 50%;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  width: 48px;
  border-radius: 7px;
`;

export const UserName = styled.span`
  align-self: center;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainText};
`;
