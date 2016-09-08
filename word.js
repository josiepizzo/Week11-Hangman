var letter = require("./letter.js");

function Word(wrd){
    this.word = wrd;
    this.lets = [];
    this.found = false;

    this.getLets = function(){
      for (var i=0; i <this.word.length; i++){
        var newLet = new letter(this.word[i]);
        this.lets.push(newLet); //Creates each letter object
      }
    }

    this.checkIfLetterFound = function(guessLetter){
      var whatToReturn = 0;
      for (var i=0; i <this.lets.length; i++){
        if(this.lets[i].charac === guessLetter) {
          this.lets[i].appear = true;
          ++whatToReturn;
          console.log("What to return"+ whatToReturn);
          return whatToReturn;
        }
      }
    }

    this.didWeFindTheWord = function(){
      var found = false;

      if (this.lets.every(checkAppearTrue)){
        found = true;
        return found;
      }

      function checkAppearTrue(value, index, ar){
        if (value.appear === true) {
          return true;
        } else {
          return false;
        }
      }
    }

    this.wordRender = function(){
      var str = "";
      for (var i=0; i <this.lets.length; i++){
        str += this.lets[i].letterRender();
        console.log("test"+this.lets[i]);
        console.log("Inside word render :"+str);
        return str;
      }
    }
}
// var test = new Word('test');
// var x = test.getLets('test');
// var y = test.checkIfLetterFound("t");

module.exports = Word;