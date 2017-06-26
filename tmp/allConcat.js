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

var apiKey = "fb313518c0942fc6ebfb63bd3ee11070";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey) .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })
    .fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
