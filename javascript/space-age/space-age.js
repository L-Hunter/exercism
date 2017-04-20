function SpaceAge (s){
//Given an age in seconds, calculate how old someone is in terms of a given planet's solar years.
	this.seconds = s;
	
	//Earth: orbital period 365.25 Earth days, or 31557600 seconds
	this.onEarth = function(){
		this.earthAge = parseFloat((this.seconds / 31557600).toFixed(2));
		return this.earthAge;

	}
   
   //Mercury: orbital period 0.2408467 Earth years
   	this.onMercury = function(){
   		this.onEarth();
   		this.mercuryAge = parseFloat((this.earthAge / 0.2408467).toFixed(2));
   		return this.mercuryAge;   
	}

	//Venus: orbital period 0.61519726 Earth years
	this.onVenus = function(){
      	this.onEarth();
   		this.venusAge = parseFloat((this.earthAge / 0.61519726).toFixed(2));
   		return this.venusAge; 
   	}

   //Mars: orbital period 1.8808158 Earth years
   this.onMars = function(){
   		this.onEarth();
   		this.marsAge = parseFloat((this.earthAge / 1.8808158).toFixed(2));
   		return this.marsAge;
   }

   //Jupiter: orbital period 11.862615 Earth years
   this.onJupiter = function(){
   		this.onEarth();
   		this.jupiterAge = parseFloat((this.earthAge / 11.862615).toFixed(2));
   		return this.jupiterAge;
   }

   //Saturn: orbital period 29.447498 Earth years
   this.onSaturn = function(){
   		this.onEarth();
   		this.saturnAge = parseFloat((this.earthAge / 29.447498).toFixed(2));
   		return this.saturnAge;
   }

   //Uranus: orbital period 84.016846 Earth years
   this.onUranus = function(){
   		this.onEarth();
   		this.uranusAge = parseFloat((this.earthAge / 84.016846).toFixed(2));
   		return this.uranusAge;
   }

   //Neptune: orbital period 164.79132 Earth years
   this.onNeptune = function(){
   		this.onEarth();
   		this.neptuneAge = parseFloat((this.earthAge / 164.79132).toFixed(2));
   		return this.neptuneAge;
   }
}

module.exports = SpaceAge;