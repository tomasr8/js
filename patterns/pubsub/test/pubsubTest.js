'use strict';

const pubsub = require('../pubsub.js');
const expect = require('chai').expect;

let newest;
const subscriber = function(topic, data) {
  newest = data;
};
const topic = "weather";
const token = pubsub.subscribe(topic, subscriber);

describe('pubsub test', function() {
  it('should correctly publish new data', function() {
    let data = ["rainy", "windy", "sunny"];
    data.forEach(c => {
      pubsub.publish(topic, c);
      expect(newest).to.be.equal(c);
    });
  });
  it('should correctly remove subscribers', function() {
    pubsub.publish(topic, "rainy");
    pubsub.remove(token);
    pubsub.publish(topic, "windy");

    expect(newest).to.be.equal("rainy");
  });
});
