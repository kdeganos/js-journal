exports.Journal = function(title, body) {
  this.title = title;
  this.body = body;
}

exports.Journal.prototype.getOutput = function() {
  var output = this.title + ": " + this.body;
  return output;
}

exports.Journal.prototype.count = function() {
  var words = this.body.split(" ");
  var counter = 0;
  words.forEach(function() {
    counter++;
  });
  return counter;
}
