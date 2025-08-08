class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    console.log("123abc");
  }
}

const om = new User("om singh");
om.logMe();
// om.createId();           //static method can't be access

class Teacher extends User {
  constructor(Username, email) {
    super(Username);
    this.email = email;
  }
}

const yasika = new Teacher();
yasika.logMe();
yasika.createId(); //child class can also can't acees static method
