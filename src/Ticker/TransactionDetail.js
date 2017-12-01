/** @format */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TransactionDetail extends PureComponent {
  static propTypes = {
    txn: PropTypes.shape({
      x: PropTypes.shape({
        tx_index: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { txn: { x: { inputs, out } } } = this.props;
    return (
      <div>
        <div>
          <h2>From</h2>
          <table>
            <thead>
              <tr>
                <th>Address</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>{inputs.map(i => i.prev_out).map(TransactionParties)}</tbody>
          </table>
        </div>
        <div>
          <h2>To</h2>
          <table>
            <thead>
              <tr>
                <th>Address</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>{out.map(TransactionParties)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function TransactionParties({ addr, script, sequence, value, ...props }) {
  return (
    <tr key={sequence || script}>
      <td>{addr}</td>
      <td>{value / 10 ** 8}₿</td>
    </tr>
  );
}

export default TransactionDetail;
