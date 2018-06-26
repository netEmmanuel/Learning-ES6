
//creating a movie object literal
const movie1={
	title: "Dead Pool 2",
	duration: "1hr",
	year:"2018",

	getSummary: function () {
		return `${this.title} was released in ${this.year}`;
	}
};

const movie2={
	title: "Iron Man 2",
	duration: "1hr",
	year:"2016",

	getSummary: function () {
		return `${this.title} was released in ${this.year}`;
	}
};

// console.log(movie1.getSummary());

// console.log(Object.values(movie2));

// console.log(Object.keys(movie2));
