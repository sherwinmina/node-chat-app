var expect = require('expect');

var {generatemessage} = require('./message');

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