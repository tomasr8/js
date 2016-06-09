let pubsub = (function() {
  let topics = {};
  let nextID = 0;

  return {
    subscribe: function(topic, fn) {
      topics[topic] = topics[topic] || [];
      topics[topic].push({
        id: nextID++,
        publish: fn
      });

      return {
        id: nextID - 1,
        topic: topic
      };
    },
    publish: function(topic, data = {}) {
      let queue = topics[topic];

      if (queue) {
        queue.forEach(sub => {
          sub.publish(topic, data);
        });
      }
    },
    remove: function(token) {
      let {id, topic} = token;
      let queue = topics[topic];

      if (queue) {
        let index = indexOf(queue, sub => sub['id'] === id);
        if(index !== -1) {
          queue.splice(index, 1);
        } else {
          throw 'Subscriber not found';
        }
      }
    }
  };
})();

function indexOf(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      return i;
    }
  }
  return -1;
}

module.exports = pubsub;


















// <---------------------------->
