 var socket = io();

  socket.on('connect', function () {
    console.log('Connected to server');
  });

  socket.on('disconnect', function () {
    console.log('Disconnected from server');
  });


socket.on('newMessage', function (message) {
  console.log('New Message', message);
});

socket.emit('createMessage', {
  from: 'Doggie',
  text: 'Hi'
}, function (data) {
  console.log('Go it!', data);
});