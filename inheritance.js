
function Movie(title, duration, year) {
	this.title =title;
	this.duration =duration;
	this.year =year;
}

// getSummary prototype 
Movie.prototype.getSummary=function(){
	return `${this.title} was released in ${this.year}`;
};

// cinema constructor
function Cinema (title, duration, year, cinemaName, amount, viewingTime){
	Movie.call(this, title, duration, year);

	this.cinemaName =cinemaName;
	this.amount =amount;
	this.viewingTime =viewingTime

}
// inherit prototype
Cinema.prototype = Object.create(Movie.prototype);

// instantiate cinema Object
const cinema1 = new Cinema ('Black Panther', '2hr', '2018', 'Silver Bird Lagos', '1200', '8pm-10pm');

//Use Cinema Constructor
Cinema.prototype.constructor = Cinema;

console.log(cinema1);
console.log(cinema1.getSummary());