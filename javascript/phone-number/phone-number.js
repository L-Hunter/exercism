function PhoneNumber(digits){
	this.digits = digits.replace(/\s/g,'').split('');

	this.number = function(){
		var numArr = [];
		var len = this.digits.length;
		var invalid = "0000000000";

		for (var i = 0; i < len; i++){
			if (!(isNaN(this.digits[i]))) {
				numArr.push(this.digits[i]);
			}
		}
		numArr = numArr.join('');

		if (numArr.length > 11) {
			return invalid;
		} if (numArr.length === 11) {
			if (numArr[0] === "1") {
				numArr = numArr.slice(1,11);
				return numArr;
			} else {
				return invalid;
			}
		} if (numArr.length === 10) {
			return numArr;
		} else {
			return invalid;
		}
	} 

 	this.areaCode = function() {
 		return this.digits.join("").slice(0,3);
 	}

	this.toString = function() {
		var number = "(" + this.digits.join("").slice(0,3) + ") " + this.digits.join("").slice(3,6) + "-" + this.digits.join("").slice(6,10);
		return number;
	}
}

module.exports = PhoneNumber;