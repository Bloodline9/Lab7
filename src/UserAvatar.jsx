import React from "react";

import "./styles.css";

class UserAvatar extends React.Component {
  render() {
    const { image } = this.props;

    return <img src={image} widht="150" height="auto" />;
  }
}

export default UserAvatar;
