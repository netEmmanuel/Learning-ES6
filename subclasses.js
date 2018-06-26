class Movie{
	constructor(title, duration, year){
		this.title = title;
		this.duration = duration;
		this.year = year;
	}

	getReleasedDate(){
		return `${this.title} was released in ${this.year}`;
	}
	
}

// Cinema Subclass

class Cinema extends Movie{
	constructor(title, duration, year, cinemaName, amount, viewingTime){
		super(title, duration, year);
		this.cinemaName =cinemaName;
		this.amount =amount;
		this.viewingTime =viewingTime	
	}
}

// instantiate cinema Object
const cinema1 = new Cinema ('Black Panther', '2hr', '2018', 'Silver Bird Lagos', '1200', '8pm-10pm');

console.log(cinema1.getReleasedDate());