class User {
  //parent class
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  //child class            [extends paents class]
  constructor(username, email, password) {
    super(username); // accesing parent class consteructor through super() & passing value inside which.
    this.email = email;
    this.password = password;
  }

  addcourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const om = new Teacher("om", "om@gmail.com", "dfgh");
const yasika = new User("yasika");

console.log(om); //Teacher { username: 'om', email: 'om@gmail.com', password: 'dfgh' }
console.log(yasika); // Teacher { username: 'yasika', email: 'yasika@gmail.com', password: '' }

om.addcourse();
yasika.logMe();
// yasika.addcourse(); //parent class cant access children class method
om.logMe(); // but child class can access both parent as well as child methods.

console.log(om == yasika); // false
console.log(om instanceof Teacher); //true  b/c om is object of class Teacher
console.log(om instanceof User); // true b/c Teacher class has extended User class so om is also object of User class.
console.log(yasika instanceof User); // direct instance/object of User class
console.log(yasika instanceof Teacher); // parent class has no relation with chid class, it live in their own worlds.
// same goes with objects also they also have no relation with childs class.
