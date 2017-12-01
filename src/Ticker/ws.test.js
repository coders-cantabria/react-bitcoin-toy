/** @format */
import React from 'react';
import { WS } from './ws';
import { mount, shallow } from 'enzyme';

const noop = () => {};

let wsInstance;
const send = jest.fn();
const close = jest.fn();
class TestWebSocket {
  constructor() {
    this.send = send;
    this.close = close;
    wsInstance = this;
  }
}

beforeAll(() => {
  global.WebSocket = TestWebSocket;
});

afterEach(() => {
  send.mockClear();
  close.mockClear();
});

afterAll(() => {
  global.WebSocket.mockRestore();
});

test('renders nothing', () => {
  const rendered = shallow(<WS receiveTxn={noop} />);
  expect(rendered.getElement()).toBeNull();
});

test('opens a WebSocket on mount', () => {
  const rendered = mount(<WS receiveTxn={noop} />);
  expect(wsInstance).toBeInstanceOf(TestWebSocket);
  wsInstance.onopen && wsInstance.onopen();
  expect(send).toHaveBeenCalled();
  rendered.unmount();
});

test('calls receiveTxn when a message is received', () => {
  const receiveTxn = jest.fn();
  const rendered = mount(<WS receiveTxn={receiveTxn} />);
  const msg = { Hello: 'world!' };
  wsInstance.onmessage({ data: JSON.stringify(msg) });
  expect(receiveTxn).toHaveBeenCalledWith(msg);
  rendered.unmount();
});

test('closes WebSocket on unmount', () => {
  const rendered = mount(<WS receiveTxn={noop} />);
  rendered.unmount();
  expect(close).toHaveBeenCalledTimes(1);
});
