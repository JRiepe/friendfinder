var friendsArray = [
	{
		name: "Tom Green",
		photo: "http://mashable.com/wp-content/uploads/2008/06/tom-green.png",
		scores: [5, 0, 0, 0, 2, 5, 5, 0, 5, 5]
	},
	{
		name: "Bob Hope",
		photo: "http://img2.timeinc.net/people/i/2013/news/130930/bob-hope-1-320.jpg",
		scores: [3, 2, 3, 2, 1, 3, 4, 3, 3, 2]
	},
	{
		name: "Jerry Lewis",
		photo: "http://img2.timeinc.net/people/i/2013/news/130930/bob-hope-1-320.jpg",
		scores: [2, 4, 2, 3, 1, 3, 5, 5, 4, 4]
	}
];

// Note how we export the array. This makes it accessible to other files using require. 
module.exports = friendsArray; 