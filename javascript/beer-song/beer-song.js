function BeerSong(n){
	this.n = n;

	this.verse = function(n){
		
		var bottle = " bottle ";
		var bottles = " bottles ";
		var none = "no more bottles of beer";
		var zero = "No more bottles of beer on the wall";
		var phrase1 = "of beer on the wall, " + n;
		var phrase2 = "of beer.\nTake one down and pass it around, ";
		var phrase3 = "of beer on the wall.\n";
		var drinkAll = "of beer.\nTake it down and pass it around, " + none + " on the wall.\n"
		var closing = none + ".\nGo to the store and buy some more, 99" + bottles + phrase3;
		var lyrics = ""
		if (n >= 3) {
			lyrics = n + bottles + phrase1 + bottles + phrase2 + (n - 1) + bottles + phrase3;
			console.log(lyrics);
		} else if (n === 2) {
			lyrics = n + bottles + phrase1 + bottles + phrase2 + (n - 1) + bottle + phrase3;
		} else if (n === 1) {
			lyrics = n + bottle + phrase1 + bottle + drinkAll;
		} else {
			lyrics = zero + ", " + closing;
		}
		return lyrics;
	}

	this.sing = function(start, end){
		var end = end || 0;
		var song = [];
      	for (var i = start; i >= end; i--) {
        	song.push(this.verse(i));
      	};
      	return song.join("\n");
	}
}

module.exports = BeerSong;