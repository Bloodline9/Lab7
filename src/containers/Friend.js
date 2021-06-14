import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendsList from "../BestFriendsList";

class Friend extends Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Лучшие друзья:</h2>
        <div>
          <BestFriendsList friends={this.props.friends} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Этот метод вызывается всякий раз, когда происходит обновление store и именно он передаёт необходимые свойства из store в компонент
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(Friend);
