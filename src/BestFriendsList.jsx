import React from "react";
import BestFriendCard from "./BestFriendCard";

import "./styles.css";

class BestFriendsList extends React.Component {
  render() {
    console.log(this.props.friends);
    return (
      <div>
        {this.props.friends.friends.map((f) => (
          <div>
            <BestFriendCard friend={f} />
          </div>
        ))}
      </div>
    );
  }
}

export default BestFriendsList;
