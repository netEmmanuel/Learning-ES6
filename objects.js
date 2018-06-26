// Objects of Protos

const moviePrototypes ={
	getReleasedDate:function(){
	return `${this.title} was released in ${this.year}`;
	},
	getMovieAge:function(){
	const years = new Date().getFullYear() - this.year;
	return `${this.title} was released ${years} years ago`;
	}
}

//Create Object

const movie1 = Object.create(moviePrototypes, {
	title:{value: 'Dead Pool 2'},
	duration:{value: '2hr'},
	year:{value: '2018'}
});


console.log(movie1);