import React, { Component } from 'react';

export class EchoEhlo extends Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      message: this.state.message.split('').reverse().join(''),
    })
  }
  render() {
    return <h1 onClick={this.toggle}>
      {this.state.message}
    </h1>
  }
}
