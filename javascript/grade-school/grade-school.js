function School() {
	var grades = {};

	this.roster = function(){
		return grades;
	}

	this.add = function(name, grade){
		if (grades.hasOwnProperty(grade)){
			grades[grade].push(name);
			this.grade(grade);
		} else {
      		grades[grade] = [name];
    	}
    }

	this.grade = function(grade){
		if (grades.hasOwnProperty(grade)){
			grades[grade].sort();
			return grades[grade];
		} else {
			return [];
		}
	}
}



module.exports = School;