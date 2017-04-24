const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Jessica',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Donnie',
      room: 'Node Course'
    },
    {
      id: '3',
      name: 'Ken',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Sherwin',
      room: 'Hola Room'
    };
    var resUser = users.addUser(user.id, user.name, user.room)

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {

  });

  it('should not remove a user', () => {

  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Jessica', 'Donnie', 'Ken']);
  })
});