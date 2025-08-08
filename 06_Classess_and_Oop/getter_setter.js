class User {
  constructor(email, password) {
    (this.emai = email), (this.password = password);
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}modified`;
  }

  set password(value) {
    this._password = value;
  }
}

const om = new User("om@gmail.com", "abc");
console.log(om.password);
console.log(om.email);
