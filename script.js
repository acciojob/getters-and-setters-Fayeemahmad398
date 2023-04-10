

class Person {
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	get getters(){
		return this.name;
	}
	set setters(age){
		this.age=age;
	}
}



class Student extends Person {
	// constructor(name,age){
		// super();
		// this.name=name;
		// this.age=age;
		
	// }
	function study(){
		console.log(`${this.name} is studing`);
	}
}



class Teacher extends Person {
	// constructor(name,age){
	// 	super();
	// 	this.name=name;
	// 	this.age=age;
	// }
	function teach(){
		console.log(`${this.name} is teaching`);
	}
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
