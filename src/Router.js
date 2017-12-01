/** @format */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ticker from './Ticker';
import Blocks from './Blocks';
import { connect } from 'react-redux';
import { navigate } from './store/actions';

const routes = Object.freeze({
  blocks: 'Blocks',
  transactions: 'Transactions',
});

class Router extends Component {
  static propTypes = {
    route: PropTypes.oneOf(Object.keys(routes)),
  };

  getContents() {
    switch (this.props.route) {
      case 'transactions':
        return <Ticker />;
      case 'blocks':
        return <Blocks />;

      default:
        return (
          <div>
            No component matching route: {JSON.stringify(this.props.route)}
          </div>
        );
    }
  }

  navigate = e => (
    // eslint-disable-next-line no-sequences
    e.preventDefault(),
    this.props.navigate(new URL(e.target.href).pathname.slice(1))
  );

  render() {
    return (
      <div>
        <nav>
          {Object.keys(routes).map(path => (
            <a key="key" href={path} onClick={this.navigate}>
              {routes[path]}
            </a>
          ))}
        </nav>
        {this.getContents()}
      </div>
    );
  }
}

export default connect(({ route }) => ({ route }), { navigate })(Router);
