import React, { Component } from 'react';

export class EchoEhlo extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hey!',
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      message: this.state.message.split('').reverse().join(''),
    })
  }
  render() {
    return <h1 onClick={this.toggle} className='alert-heading'>
      {this.state.message} 📦 🚀
      <br/>
      <button className={'btn btn-primary'}>click me</button>
    </h1>
  }
}
