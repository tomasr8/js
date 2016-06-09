'use strict';

const assert = require('assert');
const pubsub = require('../pubsub.es6');

let subscriber = function(topic, data) {
  console.log(data + ' from topic ' + topic);
};

let topic = 'WEATHER';
let token = pubsub.subscribe(topic , subscriber);
pubsub.publish(topic, 'rainy');
pubsub.publish(topic, 'windy');
pubsub.remove(token);
pubsub.publish(topic, 'windy');


// <---------------------------->
