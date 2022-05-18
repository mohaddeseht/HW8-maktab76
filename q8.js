function Student(_name, _gender) {
    this.name = _name;
    this.gender = _gender;
}
Student.prototype.age = 15;
let studentObj = new Student("Ali", "m");
console.log(studentObj.age);
let studentObj2 = { ...studentObj };
Student.prototype.age = 20;
console.log(studentObj2.age);
