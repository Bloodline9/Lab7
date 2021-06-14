import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Users from "./containers/Users";
import Friend from "./containers/Friend";

import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

const store = createStore(allReducers); //создаем глобальное хранилище

const rootElement = document.getElementById("root"); //Для использование store в компоненте передаем его в пропсы
ReactDOM.render(
  //И после использовать в компоненте: this.props.state. Для этого react-redux предостовляет метод Provider
  <Provider store={store}>
    <div>
      <Users />
      <Friend />
    </div>
  </Provider>,
  rootElement
);
