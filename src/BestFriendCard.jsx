import React from "react";

import Button from "./Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RemoveFriend } from "./actions/index";
import "./styles.css";

class BestFriendCard extends React.Component {
  render() {
    const { friend } = this.props;

    return (
      <div className="card">
        <div>{friend}</div>
        <Button
          label="Remove from friends"
          handleClick={() => this.props.RemoveFriend(friend)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  //помещает в props компонента часть нужных данных из store
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  //поместить в props функции, с помощью которых компонент отправляет actions в store
  return bindActionCreators({ RemoveFriend: RemoveFriend }, dispatch);
  //Он позволяет оборачивать функцию dispatch и actionCreator в единый объект
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);
//Именно она связывает mapStateToProps и mapDispatchToProps с компонентом и передает необходимые поля
//и методы в него
