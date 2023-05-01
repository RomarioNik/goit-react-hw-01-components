import PropTypes from "prop-types";
import { ListItem, Indikator, Avatar, UserName } from "./Friend.styled";

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Indikator status={isOnline}></Indikator>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </ListItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
