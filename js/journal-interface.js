var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function(){
   $('#journal-entry').submit(function(event){
       event.preventDefault();
       var title = $('#title').val();
       var body = $('#body').val();
       var newEntry = new Entry(title, body);
       var wordOut = newEntry.journalCount();
       $('#journal-out').append('<p>Title: ' + title + '</p><p>'  + body + '</p>');
       $('#wordCount').append('<p>Word count: ' + wordOut + '</p>');

   });
});
