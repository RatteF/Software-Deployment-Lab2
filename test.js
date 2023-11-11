const chai = require('chai');
const expect = chai.expect;
const app = require('./Node.js');

describe('Testfall für Node.js-Anwendung', () => {
  it('Sollte eine erfolgreiche Antwort zurückgeben', () => {
    const response = app.getResponse(); 
    expect(response).to.equal('Hallo Welt.');
  });
});
