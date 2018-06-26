class Movie{
	constructor(title, duration, year){
		this.title = title;
		this.duration = duration;
		this.year = year;
	}

	getReleasedDate(){
		return `${this.title} was released in ${this.year}`;
	}
	getMovieAge(){
		const years = new Date().getFullYear() - this.year;
	return `${this.title} was released ${years} years ago`;
	}
	changeMovieyear(newYear){
		this.year = newYear;
		this.changed = true;
	}

	//creating a static method
	static blockbuster(){
		return "Black Panther";
	}
}

// Instantiate an Object
const movie1 = new Movie('Spider Man', '2hr:30mins', '2017');

console.log(movie1); 
movie1.changeMovieyear("2019");
console.log(movie1); 

console.log(Movie.blockbuster());