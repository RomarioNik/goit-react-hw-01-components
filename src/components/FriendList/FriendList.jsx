import PropTypes from "prop-types";
import Friend from "./Friend/Friend";
import { List } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
