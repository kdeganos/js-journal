var Journal = require('./../js/journal.js').Journal;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var output = new Journal(title, body);
    $('#entries').append('<li>' + output.getOutput() + '</li>');
    $('#entries').append('<li>Words: ' + output.count() + '</li>');
  });
});
