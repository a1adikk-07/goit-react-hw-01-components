import styled from 'styled-components';

export const FriendListitem = styled.li`
  display: flex;
  width: 40%;
  margin: 5px 50px;
  align-items: center;
  padding: 6px 22px;
  gap: 18px;
  border: 1px solid #94bce2;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
`;

export const FriendStatus = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  font-size: 20px;
  color: accent;
`;

export const FriendStatusOn = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: green;
`;

export const FriendStatusOff = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: red;
`;

export const FriendAvatar = styled.img`
  border-radius: 25px;
  background-color: #ccc;
`;

export const FriendName = styled.p`
  color: dark;
  font-size: 42px;
  font-weight: 700;
`;
