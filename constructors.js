
function Movie(title, duration, year) {
	this.title =title;
	this.duration =duration;
	this.year =year;

	this.getSummary=function () {
		return `${this.title} was released in ${this.year}`;
	}
}

// instantiate an Object

const movie1 = new Movie('Dead Pool', '2hr', '2018');
const movie2 = new Movie('Iron Man', '2hr', '2016');

console.log(movie1);
console.log(movie1.title);
console.log(movie1.getSummary());
console.log(movie2.getSummary());