/** @format */
import './Blocks.css';
import React, { PureComponent } from 'react';
import Block from './Block';
// import BlockDetail from './BlockDetail';
import WS from './ws';
import { connect } from 'react-redux';

export class Blocks extends PureComponent {
  state = {
    hoveredBlock: null,
  };

  enterBlock = hoveredBlock => this.setState({ hoveredBlock });
  leaveBlock = () => this.setState({ hoveredBlock: null });

  render() {
    const { blocks } = this.props;
    return (
      <div className="Blocks">
        <WS />
        <div className="Blocks__Blocks">
          {blocks.map(({ hash, height, time }) => (
            <Block
              key={hash}
              hash={hash}
              height={height}
              onMouseEnter={this.enterBlock}
              onMouseLeave={this.leaveBlock}
              time={time}
            />
          ))}
        </div>
        {/*
        <div className="Ticker__Transactions__Detail">
          {this.state.hoveredBlock && (
            <BlockDetail block={this.state.hoveredBlock} />
          )}
        </div>
        */}
      </div>
    );
  }
}

export default connect(({ blocks }) => ({ blocks }))(Blocks);
