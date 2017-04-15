function FoodChain(){

	var food = {
		"IK": "I know an old lady who swallowed a ",
		"fly": 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
		"spider": 'She swallowed the spider to catch the fly.\n',
		"bird": 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n',
		"cat": 'She swallowed the cat to catch the bird.\n',
		"dog": 'She swallowed the dog to catch the cat.\n',
		"goat": 'She swallowed the goat to catch the dog.\n',
	}

	var song = {
		1: food["IK"] + 'fly.\n' + food["fly"],
		2: food["IK"] + 'spider.\nIt wriggled and jiggled and tickled inside her.\n' + food["spider"] + food["fly"],
    	3: food["IK"] + 'bird.\nHow absurd to swallow a bird!\n' + food["bird"] + food["spider"] + food["fly"],
		4: food["IK"] + 'cat.\nImagine that, to swallow a cat!\n' + food["cat"] + food["bird"] + food["spider"] + food["fly"],
		5: food["IK"] + 'dog.\nWhat a hog, to swallow a dog!\n' + food["dog"] + food["cat"] + food["bird"] + food["spider"] + food["fly"],
		6: food["IK"] + 'goat.\nJust opened her throat and swallowed a goat!\n' + food["goat"] + food["dog"] + food["cat"] + food["bird"] + food["spider"] + food["fly"],
		7: food["IK"] + 'cow.\nI don\'t know how she swallowed a cow!\nShe swallowed the cow to catch the goat.\n' + food["goat"] + food["dog"] + food["cat"] + food["bird"] + food["spider"] + food["fly"],
		8: food["IK"] + 'horse.\nShe\'s dead, of course!\n',
	}
	
	this.verse = function(start){
    	return song[start];
    }

    this.verses = function(start, end){
		lyrics = "";

		if (end >= 1) {
			lyrics += song[1] + '\n';
		} if (end >= 2) {
			lyrics += song[2] + '\n';
		} if (end >= 3) {
			lyrics += song[3] + '\n';
		} if (end >= 4) {
			lyrics += song[4] + '\n';
		} if (end >= 5) {
			lyrics += song[5] + '\n';
		} if (end >= 6) {
			lyrics += song[6] + '\n';
		} if (end >= 7) {
			lyrics += song[7] + '\n';
		} if (end >= 8) {
			lyrics += song[8] + '\n';
		}
		return lyrics;
	}
    
}

module.exports = FoodChain;
