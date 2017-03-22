
function Gigasecond(input) {

	this.date = function() {
		var birthday = Date.parse(input);
		var gigDate = new Date(birthday + 1000000000000);
		return gigDate;
	}
}

module.exports = Gigasecond;

