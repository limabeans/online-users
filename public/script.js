import React from 'react';
import ReactDOM from 'react-dom';

console.log(React);

var socket = io();


var Test = (props) => <h1>test</h1>;


ReactDOM.render(<Test />, document.getElementById("root2"));
