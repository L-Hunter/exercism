
function Isogram(term){
	this.term = term.toLowerCase().replace(new RegExp(/é/g),"e");
	
	this.isIsogram = function(){
		var hasDuplicates = (/([a-zA-Z]).*?\1/).test(this.term);        
		if (hasDuplicates === true) {
			return false;
		} else {
			return true;
		}
	}
}

module.exports = Isogram;