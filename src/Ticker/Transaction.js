/** @format */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Transaction extends PureComponent {
  static propTypes = {
    txn: PropTypes.shape({
      x: PropTypes.shape({
        tx_index: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
  };

  enter = () => this.props.onMouseEnter(this.props.txn);
  leave = () => this.props.onMouseLeave();

  render() {
    const { txn } = this.props;
    return (
      <div>
        <a href={`https://blockchain.info/tx-index/${txn.x.tx_index}`}>
          Transaction #{txn.x.tx_index}
        </a>
      </div>
    );
  }
}

export default Transaction;
