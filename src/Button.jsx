import React from "react";

import "./styles.css";

class Button extends React.Component {
  render() {
    const { label, handleClick } = this.props;
    return (
      <div className="botton_wrap">
        <button onClick={handleClick}>{label}</button>
      </div>
    );
  }
}

export default Button;
