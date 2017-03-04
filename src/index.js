import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatComponent from './ChatComponent';

const io = require('socket.io-client');
const socket = io();

socket.on('server message', function(message) {
  var people = JSON.parse(message);
  ReactDOM.render( <ChatComponent people={people} />, document.getElementById('root'));
});
