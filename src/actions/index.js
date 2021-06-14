export const AddFriend = (user) => {
  return {
    type: "User_ADD",
    payloader: `${user.name.first} ${user.name.last}`
  };
};

export const RemoveFriend = (friend) => {
  return {
    type: "User_Remove",
    payloader: friend
  };
};
