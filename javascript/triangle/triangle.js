 function Triangle(a, b, c){
	
 	this.kind = function(){
 		
		if (a < 0 || b < 0 || c < 0) 
			throw "Length of all sides must be greater than zero";
		if (a * b * c == 0)
			throw "Triangle are must be greater than zero";
		if (a + b < c || a + c < b || b + c < a)
			throw "The sum of the lengths of any two sides must be greater than or equal to the length of the third side";

 		var type = "";
		if (a == b && b == c) {
			type = 'equilateral';
		} else if (a == b || a == c || b == c){
			type = 'isosceles';
		} else {
			type = 'scalene';
		}
		return type;
	}

 }

module.exports = Triangle;