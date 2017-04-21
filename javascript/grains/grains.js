var BigInt = require('./big-integer.js');

function Grains(){
	this.square = function(n){
		var ans =  BigInt(2).pow(n - 1).toString();
		return ans;
	}

	this.total = function(n){
		var ans = BigInt(2).pow(64).prev().toString();
		return ans;
	}
	return this;

}

module.exports = Grains;