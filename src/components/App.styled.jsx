import PropTypes from "prop-types";
import styled from "styled-components";
import { Tabs, TabPanel } from "react-tabs";

export const Container = styled.div`
  max-width: 991px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const TabsStyled = styled(Tabs)`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondText};
  background-color: ${({ theme }) => theme.colors.bg};
  user-select: none;

  & .tabHead {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainText};
    border-radius: 5px 5px 0 0;
    border-color: #aaa;
    background-color: ${({ theme }) => theme.colors.bg};
  }

  & .tabHead:focus:after {
    background: transparent;
  }
`;

export const TabPanelStyled = styled(TabPanel)`
  display: flex;
  justify-content: center;
`;

// TabsStyled.propTypes = {
//   theme: PropTypes.exact({
//     colors: PropTypes.exact({
//       mainText: PropTypes.string.isRequired,
//       secondText: PropTypes.string.isRequired,
//       bg: PropTypes.string.isRequired,
//     }).isRequired,
//   }).isRequired,
// };
