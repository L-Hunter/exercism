
function Bob() {

	this.hey = function(phrase) {
		var newPhrase = phrase.replace(/[0-9]/g, '').replace(/\s/g, '');

		if (!newPhrase) {
			return 'Fine. Be that way!';
		} else if (newPhrase === newPhrase.toUpperCase() && newPhrase.match(/[a-z]/i)) {
			return 'Whoa, chill out!';
		} else if (newPhrase.endsWith("?")) {
			return 'Sure.';
		} else {
			return 'Whatever.';
		}
	}
}

module.exports = Bob;