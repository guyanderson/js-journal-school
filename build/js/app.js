(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "fb313518c0942fc6ebfb63bd3ee11070";

},{}],2:[function(require,module,exports){
function Entry(title, body) {
    this.title = title;
    this.body = body;
}

Entry.prototype.journalCount = function(){
    var bodyCount = this.body.split(' ').length;
    return bodyCount;
};

Entry.prototype.vowelCount = function(){
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var bodyChar = this.body.split('');
  var vowelCount = 0;
  for(var i = 0; i <= bodyChar.length; i++){
    if(bodyChar[i] === 'a' || bodyChar[i] === 'e' || bodyChar[i] === 'i' || bodyChar[i] === 'o' || bodyChar[i] === 'u')
    {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

Entry.prototype.teaser = function(){
  var sentenceArray = this.body.split(".");
  var sentenceSplit = sentenceArray[0].split(' ');
  var teaseLimit = "";
  if(sentenceSplit.length >= 8){
    for(var i = 0; i <= 8; i++){
      teaseLimit += sentenceSplit[i] + " ";
    }
  } else {
    for(var k = 0; k <= sentenceSplit.length -1; k++){
      teaseLimit += sentenceSplit[k] + " ";
    }
    alert(teaseLimit);
  }
  return teaseLimit;
};

exports.journalModule = Entry;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Weather(){
}

Weather.prototype.getWeather = function(city) {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
}

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function(){
   $('#journal-entry').submit(function(event){
       event.preventDefault();
       var title = $('#title').val();
       var body = $('#body').val();
       var newEntry = new Entry(title, body);
       var wordOut = newEntry.journalCount();
       var vowelOut = newEntry.vowelCount();
       var teaserOut = newEntry.teaser();
       $('#journal-out').append('<p>Title: ' + title + '</p><p>'  + body + '</p>');
       $('#wordCount').append('<p>Word count: ' + wordOut + '</p>');
       $('#vowelCount').append('<p>Vowel count: ' + vowelOut + '</p>');
       $('#teaser').append('<p>Teaser: ' + teaserOut + '</p>');

   });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});

},{"./../js/journal.js":2,"./../js/weather.js":3}]},{},[4]);
