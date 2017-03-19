

function Pangram(string) {
	this.string = string;

	this.isPangram = function(){
		var newString = this.string.toLowerCase();
		var regEx = /([a-z])(?!.*\1)/g;

		if (newString && newString.match(regEx).length === 26){
			return true;
		} else {
			return false;
		}
	}
};

module.exports = Pangram;