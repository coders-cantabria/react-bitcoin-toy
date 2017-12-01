/** @format */

import * as types from './action-types';

export function transactions(state = [], action) {
  if (action.type === types.TXN_RECEIVE) {
    return [action.txn].concat(state).slice(0, 30);
  }
  return state;
}

export function blocks(state = [], action) {
  switch (action.type) {
    case types.BLOCK_RECEIVE:
      return [action.block].concat(state);
    case types.BLOCKS_RECEIVE:
      const blocks = state.concat(action.blocks);
      blocks.sort((a, b) => b.time - a.time);
      return blocks;
  }
  return state;
}

export function route(state = 'transactions', action) {
  if (action.type === types.NAVIGATE && action.to !== state) {
    return action.to;
  }
  return state;
}
