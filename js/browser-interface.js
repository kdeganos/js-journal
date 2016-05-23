var Journal = require('./../js/journal.js').Journal;
var moment = require('moment');

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var output = new Journal(title, body);
    $('#entries').append('<li>' + output.getOutput() + '</li>');
    $('#entries').append('<li>Words: ' + output.count() + '</li>');
    $('#entries').append('<li>' + moment().format('MMMM Do YYYY, h:mm:ss a') + '</li>');
  });
});
