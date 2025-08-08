const User = {
  _email: "o@hbc.com",
  _password: "abcdef",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);
