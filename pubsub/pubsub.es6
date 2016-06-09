function EventEmitter(){
  var events = {};

  this.on = function(event, fn){
    events[event] = events[event] || [];
    events[event].push(fn);
  };
  this.trigger = function(event){
    if(events[event]){
      events[event].forEach(c => c() );
    }
  }
}

var e = new EventEmitter();

e.on("load", function(){
  console.log("loaded");
});
e.on("load", function(){
  console.log("loaded again");
});
e.on("click", function(){
  console.log("click");
});

e.trigger("load");
e.trigger("click");
e.trigger("click");
