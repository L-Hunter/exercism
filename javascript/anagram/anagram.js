function Anagram(wordOne){
  this.wordOne = wordOne;
  var abcOne = wordOne.toLowerCase().split('').sort().join('');

 	this.matches = function(wordArray){
 		var match = [];
 		if (typeof wordArray === 'string') {
      		wordArray = [].slice.apply(arguments);
    	}
    
 		for (var i = 0; i < wordArray.length; i++){
 		  var newWord = wordArray[i];
 		  var abcTwo = newWord.toLowerCase().split('').sort().join('');
 		  if (this.wordOne.toLowerCase() === newWord.toLowerCase()){
 		  	return match;
 		  } else if (abcOne == abcTwo) {
 		    match.push(wordArray[i]);
 		  }
 		}
 		return match;
	}
}  

module.exports = Anagram;
