
const book = {
  title: "მარტოობის ასი წელი",
  author: "გაბრიელ გარსია მარკესი",
  year: 1967,
  genre: "მაგიური რეალიზმი",
  price: 25.50
};

console.log(book);


console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(book.price);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["year"]);
console.log(book["genre"]);
console.log(book["price"]);

console.log(`წიგნი "${book.title}", რომელიც დაწერა ${book.author}-მა, გამოიცა ${book.year} წელს. ის ეკუთვნის ჟანრს "${book.genre}" და ღირს ${book.price} ლარი.`);
