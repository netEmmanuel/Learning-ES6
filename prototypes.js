
function Movie(title, duration, year) {
	this.title =title;
	this.duration =duration;
	this.year =year;
}

// getSummary prototype 
Movie.prototype.getSummary=function(){
	return `${this.title} was released in ${this.year}`;
};

Movie.prototype.getMovieAge=function(){
	const years = new Date().getFullYear() - this.year;
	return `${this.title} was released ${years} years ago`;
};

// manipulating movie released date
Movie.prototype.changeMoviedate=function(newYear){
	this.year = newYear;
	this.changed = true;
	
};

// instantiate an Object
const movie1 = new Movie('Dead Pool', '2hr', '2018');
const movie2 = new Movie('Iron Man', '2hr', '2016');

console.log(movie1);
movie1.changeMoviedate('2017');
console.log(movie1);
console.log(movie2.getSummary());
console.log(movie2.getMovieAge());