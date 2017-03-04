import React from 'react';

var ChatComponent = (props) => {
  return (
    <div>
      <h5>List of active people</h5>
        <ChatList people={props.people} />
      </div>
  );
};

var ChatList = (props) => {
  return <ul>{props.people.map((person) => <li>{person}</li>)}</ul>;
};


export default ChatComponent;
