
var self = this;

self.addEventListener('message', function(e) {
  console.log('worker received:' + e.data);
  setTimeout(function(){
    console.log('worker send:' + (e.data + 1));
    self.postMessage(e.data + 1);
  }, e.data === 5 ? 4000 : 1000);
}, false);