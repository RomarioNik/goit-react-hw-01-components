import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;

  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.bgComponent};
  box-shadow: ${({ theme }) => theme.shadow.shadowComponent};
`;

export const Description = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;

  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondText};
  text-align: center;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3);
`;

export const Avatar = styled.img`
  width: 150px;
  margin: 0 auto 30px auto;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 34px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainText};
`;

export const UserTag = styled.p``;

export const Location = styled.p``;

export const ListBlocks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;

  background-color: #e7e7e77e;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 33.33%;
  height: 100%;

  &:first-of-type {
    box-shadow: 2px 0px 2px -2px rgba(60, 64, 67, 0.3);
  }

  &:last-of-type {
    box-shadow: -2px 0px 2px -2px rgba(60, 64, 67, 0.3);
  }
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondText};
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mainText};
`;
