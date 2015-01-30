server = require('http').Server();
var socketIO = require('socket.io');
var io = socketIO.listen(server);
io.sockets.on('connection', function(socket){
  console.log("connect");
   io.sockets.emit('hello', { value: "hamza" });
  socket.on('hello', function(data){
      console.log("hello : " + data.value);
      io.sockets.emit('hello', { value: data.value });
  });
  socket.on('disconnect', function(){
      console.log("disconnect");
  });
  io.sockets.emit('hello', { value: "welcome" });
});
server.listen(8080);