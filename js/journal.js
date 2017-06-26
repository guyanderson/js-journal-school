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
