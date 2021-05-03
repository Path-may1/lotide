// const assertEqual = require('../assertEqual')
// const tail = require('../tail')
// assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 3);

const assert = require('chai');
const tail = require('../tail')
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), 'Lighthouse', 'Labs');
  });
});