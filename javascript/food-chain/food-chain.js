function FoodChain(){
	this.verse = function(start){
		var lyrics = "";
		
		switch (start) {
  			case 1:
    			lyrics = "I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";

    			break;
    		case 2:
    			lyrics = 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    			break;
    		case 3:
    			lyrics = 'I know an old lady who swallowed a bird.\n' + 'How absurd to swallow a bird!\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
				break;
			case 4:
				lyrics = 'I know an old lady who swallowed a cat.\n' + 'Imagine that, to swallow a cat!\n' + 'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. ' + 'Perhaps she\'ll die.\n';
				break;
			case 5:
				lyrics = 'I know an old lady who swallowed a dog.\n' + 'What a hog, to swallow a dog!\n' + 'She swallowed the dog to catch the cat.\n' + 'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. ' + 'Perhaps she\'ll die.\n';
				break;
			case 6: 
				lyrics = 'I know an old lady who swallowed a goat.\n' + 'Just opened her throat and swallowed a goat!\n' + 'She swallowed the goat to catch the dog.\n' + 'She swallowed the dog to catch the cat.\n' + 'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. ' + 'Perhaps she\'ll die.\n';
				break;
			case 7:
				lyrics = 'I know an old lady who swallowed a cow.\n' + 'I don\'t know how she swallowed a cow!\n' +'She swallowed the cow to catch the goat.\n' + 'She swallowed the goat to catch the dog.\n' + 'She swallowed the dog to catch the cat.\n' + 'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. ' + 'Perhaps she\'ll die.\n';
				break;
    		case 8:
    			lyrics = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';
    			break;
    	}
    	return lyrics;
    }

    this.verses = function(start, end){
		lyrics = "";

		if (end >= 1) {
			lyrics += "I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n";
		} if (end >= 2) {
			lyrics += 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
		} if (end >= 3) {
			lyrics += 'I know an old lady who swallowed a bird.\n' + 'How absurd to swallow a bird!\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
		} if (end >= 4) {
			lyrics += 'I know an old lady who swallowed a cat.\n' + 'Imagine that, to swallow a cat!\n' + 'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. ' + 'Perhaps she\'ll die.\n\n';
		} if (end >= 5) {
			lyrics += 'I know an old lady who swallowed a dog.\n' + 'What a hog, to swallow a dog!\n' + 'She swallowed the dog to catch the cat.\n' + 'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. ' + 'Perhaps she\'ll die.\n\n';
		} if (end >= 6) {
			lyrics += 'I know an old lady who swallowed a goat.\n' + 'Just opened her throat and swallowed a goat!\n' + 'She swallowed the goat to catch the dog.\n' + 'She swallowed the dog to catch the cat.\n' + 'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. ' + 'Perhaps she\'ll die.\n\n';
		} if (end >= 7) {
			lyrics += 'I know an old lady who swallowed a cow.\n' + 'I don\'t know how she swallowed a cow!\n' +'She swallowed the cow to catch the goat.\n' + 'She swallowed the goat to catch the dog.\n' + 'She swallowed the dog to catch the cat.\n' + 'She swallowed the cat to catch the bird.\n' + 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' + 'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. ' + 'Perhaps she\'ll die.\n\n';
		} if (end >= 8) {
			lyrics += 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n\n';
		}
		return lyrics;
	}
    
}
module.exports = FoodChain;