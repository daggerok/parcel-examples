import { h, Component } from 'preact';

export default /* for some reasons, default is required: */ class EchoEhlo extends Component {
  state = { message: 'Hey!' };
  toggle = () => {
    const curr = this.state.message;
    const reverced = curr.split('').reverse().join('');
    this.setState({ message: reverced, });
  };
  render({}, { message }, {}) {
    return <h1 onClick={this.toggle}>
      {message} 📦 🚀
    </h1>
  }
}
