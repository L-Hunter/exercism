String.prototype.padZero = function(len, c){
    var s= this, c= c || '0';
    while(s.length< len) s= c+ s;
    return s;
}

function at(h, m) {
	this.h = h;
	this.m = m || 00;

	this.plus = function(c){
		this.h += math.floor(c/60);
		this.m += c - math.floor(c/60)
	}

	this.minus = function(c){

	}

	this.equals = function(h,m){

	}

	this.toString = function() {
		return String(this.h).padZero(2) + ":" + String(this.m).padZero(2);
	}

	return this;

}

module.exports = { at: at };
