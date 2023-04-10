//complete this code
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
	function study(){
		console.log(`${name} is studing`)
	}
}

class Teacher extends Person {
	function teach(){
		console.log(`${name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
