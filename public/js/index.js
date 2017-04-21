 var socket = io();

  socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
      to: 'jen@example.com',
      text: 'Hey. This is Sherwin'
    });
  });

  socket.on('disconnect', function () {
    console.log('Disconnected from server');
  });


socket.on('newEmail', function (email) {
  console.log('New Email', email);
});