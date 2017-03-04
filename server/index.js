const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');


const app = express();
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));



app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


var server = http.createServer(app);
var io = socketio(server);

io.on('connection', function(socket) {
  var online = Object.keys(io.engine.clients);
  io.emit('server message', JSON.stringify(online));

  socket.on('disconnect', function(){
    var online = Object.keys(io.engine.clients);
    io.emit('server message', JSON.stringify(online));
    });
});
server.listen(3000, () => console.log('we up.'));
