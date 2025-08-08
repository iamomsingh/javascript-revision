// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
//
// const chai = new User("om", "om@gmail.com", "123");
//
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// ------------------behind the scene class work as a functional programming-------------------

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptpassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("maggie", "maggiw@gmail.com", "456");

console.log(tea);
console.log(tea.encryptpassword());
console.log(tea.changeUsername());
