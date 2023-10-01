import React, { Component, RefObject, createRef } from 'react';

class MyInput extends Component {
  state = { user: "guest" }
  userInput: RefObject<HTMLInputElement> = createRef();

  changeName = () => {
    if (this.userInput.current) {
      this.setState({ user: this.userInput.current.value });
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome {this.state.user}</h2>
        <h4> Enter your name: </h4>
        <input ref={this.userInput} type="text" defaultValue="koko" />
        <button onClick={this.changeName}>Change name</button>
      </div>
    );
  }
}

export default MyInput;
