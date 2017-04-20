function ETL(){
	
	var values = {};

	this.transform = function(old){
		var scoring = {};
		
		Object.keys(old).forEach(function(key) {
			old[key].forEach(function(val) {
				scoring[val.toLowerCase()] = parseInt(key);
			});
		});
		return scoring;
	}

}

module.exports = ETL;
