/** @format */
import './Ticker.css';
import React, { PureComponent } from 'react';
import Transaction from './Transaction';
import TransactionDetail from './TransactionDetail';
import WS from './ws';
import { connect } from 'react-redux';

export class Ticker extends PureComponent {
  state = {
    hoveredTransaction: null,
    transactionsLock: null,
  };

  lockTransactions = () =>
    this.setState({ transactionsLock: this.props.transactions });
  releaseTransactions = () => this.setState({ transactionsLock: null });

  enterTransaction = txn => this.setState({ hoveredTransaction: txn });
  leaveTransaction = () => this.setState({ hoveredTransaction: null });

  render() {
    const transactions = this.state.transactionsLock || this.props.transactions;
    return (
      <div className="Ticker">
        <WS />
        <div
          className="Ticker__Transactions"
          onMouseEnter={this.lockTransactions}
          onMouseLeave={this.releaseTransactions}
        >
          {transactions.map(txn => (
            <Transaction
              key={txn.x.tx_index}
              onMouseEnter={this.enterTransaction}
              onMouseLeave={this.leaveTransaction}
              txn={txn}
            />
          ))}
        </div>
        <div className="Ticker__Transactions__Detail">
          {this.state.hoveredTransaction && (
            <TransactionDetail txn={this.state.hoveredTransaction} />
          )}
        </div>
      </div>
    );
  }
}

export default connect(({ transactions }) => ({ transactions }))(Ticker);
