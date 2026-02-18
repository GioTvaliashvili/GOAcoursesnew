// function Person(name, age, profession) {
//   this.name = name;
//   this.age = age;
//   this.profession = profession;

//   this.introduce = function () {
//     console.log("Hi, I'm " + this.name + ", a " + this.age + "-year-old " + this.profession + ".");
//   };
// }
// let person1 = new Person("Nino", 25, "Teacher");
// person1.introduce();


// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getSummary = function () {
//     return this.title + " by " + this.author + ", published in " + this.year;
//   };
// }
// let book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
// let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
// let book3 = new Book("1984", "George Orwell", 1949);

// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book3.getSummary());



function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  this.changePassword = function (newPass) {
    this.password = newPass;
  };

  this.getDetails = function () {
    return "Username: " + this.username + ", Email: " + this.email;
  };
}

let user1 = new User("luka123", "luka@mail.com", "pass123");
console.log(user1.getDetails()); 
user1.changePassword("newpass456");
console.log(user1.getDetails()); 
