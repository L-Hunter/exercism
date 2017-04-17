function Robot(){
	
	this.name = "";
	this.assignedNames = [];

	this.checkName = function(){
		this.generateName();
		if (this.assignedNames.indexOf(this.name) > -1){
			this.checkName();
		} else {
			this.assignedNames.push(this.name);
			return this.name;
		}
	}
	
	this.generateName = function(){
		var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var randomLetters = "";
		for (var l = 0; l < 2; l++){
			randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));
		} 			
		var randomNumbers = Math.floor((Math.random().toFixed(3) * 999) + 0);
		this.name = randomLetters + randomNumbers;
    	return this.name;
	}
	
	this.reset = function(){
		this.checkName();
	}

	if (this.name == ""){
	  this.checkName();
	} 
	return this.name;
}

module.exports = Robot;