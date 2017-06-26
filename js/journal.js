function Entry(title, body) {
    this.title = title;
    this.body = body;
}

Entry.prototype.journalCount = function(){
    var bodyCount = this.body.split(' ').length;
    return bodyCount;
};

exports.journalModule = Entry;
