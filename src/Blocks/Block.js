/** @format */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Block extends PureComponent {
  static propTypes = {
    hash: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
  };

  enter = () => this.props.onMouseEnter(this.props.txn);
  leave = () => this.props.onMouseLeave();

  render() {
    const { hash, time } = this.props;
    const d = new Date(time * 1000);
    return (
      <div key={hash}>
        {d.toLocaleTimeString()}
        {d.toLocaleDateString()}
        <code>
          <a href={`https://blockchain.info/block/${hash}`}>{hash}</a>
        </code>
      </div>
    );
  }
}

export default Block;
