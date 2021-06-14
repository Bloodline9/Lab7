import React from "react";
import UserCard from "./UserCard";

import "./styles.css";

class UsersList extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((u) => (
          <div>
            <UserCard user={u} />
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
