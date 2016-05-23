(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
