import React, { Component } from 'react';

class App extends Component {
  state = {
    users: [],
    isLoading: false,
  }

  renderUsersList() {
    return this.state.users.map((user, index) => {
      return (
        <li className="container-list--item" key={index}>
          <p>{user.name}</p>
          <span>{user.email}</span>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container">
      {
        this.state.isLoading
          ? (
            <div className="loading">
              <div className="loading-spinner"></div>
            </div>
          ) : null
      }

      <h1 className="container-title">The Amazing App! <span aria-label="img" role="img">😍</span></h1>
      <ul className="container-list">{this.renderUsersList()}</ul>
    </div>
    )
  }
}

export default App;
