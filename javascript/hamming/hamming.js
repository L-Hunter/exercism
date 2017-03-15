// if DNA1.length === DNA2.length
function Hamming() {
	
	this.compute = function(DNA1, DNA2) {
		var hammingDistance = 0;
		
		if (DNA1.length !== DNA2.length) {
			throw new Error("DNA strands must be of equal length.");
		} else {
			for (var i = 0; i < DNA1.length; i++) {
				if (DNA1[i] !== DNA2[i]) {
					hammingDistance ++;
				}
			}
		return hammingDistance;
		}
	}
};

module.exports = Hamming;

