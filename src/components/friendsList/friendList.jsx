import { FriendBox } from '../friendsList/friendList.styled';
import { FriendListItem } from '../friendsList/friendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendBox>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendBox>
  );
};
