String.prototype.padZero = function(len, c){
    var s= this, c= c || '0';
    while(s.length< len) s= c+ s;
    return s;
}

function Clock(h, m) {

	function setWithBoundaries(value, i) {
		var interval = 0;
		if(value < 0) {
			// return h - (Math.floor(h / 24) * 24);
			interval = Math.ceil((value * -1) / i);
			value = (interval * i) - (value * -1);
		}
		if(value > i) {
			interval = Math.floor(value / i);
			value = value - (interval * i);
		}

		return { 
			value: value, 
			interval: interval, 
			overflow: interval > 0
		};
	}
	var m = setWithBoundaries(m, 60);
	this.h = setWithBoundaries(h, 24).value;
	this.m = m.value || 0;

	this.plus = function(c){
		this.h += math.floor(c / 60);
		this.m += c - math.floor(c / 60)
	}

	this.minus = function(c){

	}

	this.equals = function(instance){
		console.log(this.h, this.m, instance.h, instance.m);
		return this.h === instance.h && this.m === instance.m;
	}

	this.toString = function() {
		return String(this.h).padZero(2) + ":" + String(this.m).padZero(2);
	}

	return this;

}

function at(h, m) {
	return new Clock(h, m);
}


module.exports = { at: at };
