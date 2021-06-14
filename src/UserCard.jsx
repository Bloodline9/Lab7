import React from "react";

import UserAvatar from "./UserAvatar";
import Button from "./Button";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AddFriend } from "./actions/index";

import "./styles.css";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className="card">
        <UserAvatar image={user.picture.large} />
        <div>{`${user.name.first} ${user.name.last}`}</div>
        <Button
          label="Add to friends"
          handleClick={() => this.props.AddFriend(user)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ AddFriend: AddFriend }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserCard);
