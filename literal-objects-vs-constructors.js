// Literal objects look like this:

var joeBob = {
  hair: "brown",
	age: 42,
	education: false
};

Constructors look like this:

function Hick(){
	this.name = name;
	this.hair = hair;
	this.age = age;
	this.education = education;
}

// To create a literal object, you would just repeat the code above.

var janeBob = {
	hair: "purple",
	age: 45,
	education: true
};

// To create a new object using constructors, you'd instantiate the object.

var jimmyJoe = new Hick();
jimmyJoe.hair = "red";
jimmyJoe.age = 36;
jimmyJoe.education = true;
