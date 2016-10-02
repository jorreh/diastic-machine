
function diastic(seed, words){

  var phrase = "";
  var currentWord = 0;

  //for every letter in your typed phrase
  for (var i = 0; i < seed.length; i++) {
    var c = seed.charAt(i);

    //loop trough text
    for (var j = currentWord; j < words.length; j++) {
      if (words[j].charAt(i) == c) {
        //found a word in the text that has a character at the same spot as the word of our srctext
        phrase += words[j] + " ";
        currentWord = j + 1;
        break;
      }

    }
  }
  return phrase;
}

var srctext;
var words;

function preload(){
  srctext = loadStrings('doors.txt');
}

function setup() {
  noCanvas();

  srctext = join(srctext, ' ' );
  words = splitTokens(srctext, ' ,!.?');

  var seed = select("#seed");
  var submit = select("#submit");

  submit.mousePressed(function(){

    var phrase = diastic(seed.value(), words);

    createP(phrase);

    // createP(seed.value());
    // createP(srctext);
  });

}



