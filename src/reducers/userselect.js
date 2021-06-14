const initialUserState = {
  //константа описывающая событие
  friends: []
};

export default function (state = initialUserState, action) {
  //указываем состояние
  switch (action.type) {
    case "User_ADD": //кейс обработки с добавлением пользователя
      return {
        ...state, //копируем
        friends: [...state.friends, action.payloader]
      };
    case "User_Remove": //кейс обработки с удалением пользователя
      return {
        ...state,
        friends: state.friends.filter((friends) => friends !== action.payloader)
      };

    default:
      //если ни один из кейсов не сработал
      return state;
  }
}
