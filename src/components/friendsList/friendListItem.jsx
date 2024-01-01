import {
  FriendListitem,
  FriendStatusOn,
  FriendStatusOff,
  FriendAvatar,
  FriendName,
} from '../friendsList/friendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListitem>
      {isOnline ? <FriendStatusOn /> : <FriendStatusOff />}
      <FriendAvatar src={avatar} alt={name} width="90" />
      <FriendName>{name}</FriendName>
    </FriendListitem>
  );
};
