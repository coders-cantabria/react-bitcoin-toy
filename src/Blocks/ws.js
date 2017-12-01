/** @format */
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveBlock } from '../store/actions';

export class WS extends PureComponent {
  static propTypes = {
    receiveBlock: PropTypes.func.isRequired,
  };

  ws = null;

  componentWillMount() {
    const ws = new WebSocket('wss://ws.blockchain.info/inv');

    ws.onclose = () => {
      ws.close();
      this.ws = null;
    };

    ws.onerror = m => {
      console.error(m);
      this.close();
    };

    ws.onmessage = ({ data }) => this.props.receiveBlock(JSON.parse(data));
    ws.onopen = () => this.subscribe();
    this.ws = ws;
  }

  componentWillUnmount() {
    this.close();
  }

  close() {
    this.ws && this.ws.close();
    this.ws = null;
  }

  send(data) {
    this.ws &&
      this.ws.send(
        data instanceof ArrayBuffer || data instanceof Blob
          ? data
          : JSON.stringify(data)
      );
  }

  subscribe() {
    this.send({ op: 'blocks_sub' });
  }

  render() {
    return null;
  }
}

export default connect(null, { receiveBlock })(WS);
