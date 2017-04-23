var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from ='Jen';
    var text = 'Some Message';
    var message = generatemessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
    // store res in variable
    // assert from match
    // asset text matchMediaassert createdAt
  });
});

describe (generateLocationMessage, () => {
  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 15;
    var longtitude = 19;
    var url = 'https://www.google.com/maps/?=15,19';
    var message = generateLocationMessage(from , latitude, longtitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});

  });
});