/** @format */
import * as types from './action-types';

export function receiveTxn(txn) {
  return {
    type: types.TXN_RECEIVE,
    txn,
  };
}

export function receiveBlock(block) {
  return {
    type: types.BLOCK_RECEIVE,
    block,
  };
}

export function receiveBlocks(blocks) {
  return {
    type: types.BLOCKS_RECEIVE,
    blocks,
  };
}

export function navigate(to) {
  return {
    type: types.NAVIGATE,
    to,
  };
}
