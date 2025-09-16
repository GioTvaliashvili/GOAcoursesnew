// Task1
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8];

// let mergedArray = arr1.concat(arr2);
// mergedArray.copyWithin(5, 0, 3);
// mergedArray.fill(0, 6);
// mergedArray.pop();
// mergedArray.shift();
// mergedArray.unshift(100, 200);
// mergedArray.splice(2, 2, ...arr3);
// let slicedArray = mergedArray.slice(-5);
// let joinedString = slicedArray.join(",");

// console.log("Final mergedArray:", mergedArray);
// console.log("Sliced Array:", slicedArray);
// console.log("Joined String:", joinedString);


// function comprehensiveArrayTask(arr1, arr2, arr3) {
//     let mergedArray = arr1.concat(arr2);
//     mergedArray.copyWithin(5, 0, 3);
//     mergedArray.fill(0, 6);
//     mergedArray.pop();
//     mergedArray.shift();
//     mergedArray.unshift(100, 200);
//     mergedArray.splice(2, 2, ...arr3);
//     let slicedArray = mergedArray.slice(-5);
//     return slicedArray.join(",");
// }


// Task2
// let students = ["Alice", "Bob", "Charlie"];
// let grades = [85, 90, 78];

// function addStudent(name, grade) {
//     students.unshift(name);
//     grades.unshift(grade);
//     return { students, grades };
// }

// function removeLastStudent() {
//     students.pop();
//     grades.pop();
//     return { students, grades };
// }

// function replaceGrade(index, newGrade) {
//     grades.splice(index, 1, newGrade);
//     return grades;
// }

// function updateGrades(value) {
//     grades.fill(value);
//     return grades;
// }

// console.log(addStudent("Diana", 92));


// console.log(removeLastStudent());


// console.log(replaceGrade(1, 100));


// console.log(updateGrades(75));

// Task3

// let playlist = ["Song A", "Song B", "Song C", "Song D"];

// function addSong(title) {
//     playlist.unshift(title);
//     return playlist;
// }

// function removeLastSong() {
//     playlist.pop();
//     return playlist;
// }

// function moveSongs() {
//     playlist.copyWithin(playlist.length - 2, 0, 2);
//     return playlist;
// }

// function combinePlaylists(secondPlaylist) {
//     return playlist.concat(secondPlaylist);
// }

// console.log(addSong("Song E"));


// console.log(removeLastSong());


// console.log(moveSongs());


// console.log(combinePlaylists(["Song X", "Song Y"]));

// Task4
// let cartItems = ["Apple", "Banana", "Orange"];
// let prices = [1.2, 0.5, 0.8];

// function addItem(item, price) {
//     cartItems.unshift(item);
//     prices.unshift(price);
//     return { cartItems, prices };
// }

// function removeFirstItem() {
//     cartItems.shift();
//     prices.shift();
//     return { cartItems, prices };
// }

// function replaceItem(index, newItem, newPrice) {
//     cartItems.splice(index, 1, newItem);
//     prices.splice(index, 1, newPrice);
//     return { cartItems, prices };
// }

// function createReceipt() {
//     return cartItems.join(", ");
// }

// function applyDiscount(discountPrice) {
//     prices.fill(discountPrice);
//     return prices;
// }

// console.log(addItem("Grapes", 2.5));


// console.log(removeFirstItem());


// console.log(replaceItem(1, "Peach", 1.75));


// console.log(createReceipt());


// console.log(applyDiscount(0.99));


// Task5
// let library = [
//     { title: "1984", author: "George Orwell", copies: 4 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", copies: 3 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 5 }
// ];

// function addBook(book) {
//     library.push(book);
//     return library;
// }

// function removeLastBook() {
//     library.pop();
//     return library;
// }

// function updateBookCopies(title, newCopies) {
//     let index = library.findIndex(book => book.title === title);
//     if (index !== -1) {
//         library.splice(index, 1, {
//             ...library[index],
//             copies: newCopies
//         });
//     }
//     return library;
// }

// function listBooks() {
//     return library.map(book => book.title).join(", ");
// }

// function extractBooks() {
//     return library.slice(0, 2);
// }

// function modifyBooks() {
//     library.push({ ...library[0] });
//     return library;
// }

// function resetCopies(newCount) {
//     library = library.map(book => ({
//         ...book,
//         copies: newCount
//     }));
//     return library;
// }

// function removeFirstBook() {
//     library.shift();
//     return library;
// }

// function addFirstBook(book) {
//     library.unshift(book);
//     return library;
// }


// Task6
// let library = [
//     { title: "1984", author: "George Orwell", copies: 4 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", copies: 3 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 5 }
// ];

// function addBook(book) {
//     library.push(book);
//     return library;
// }

// function removeLastBook() {
//     library.pop();
//     return library;
// }

// function updateBookCopies(title, newCopies) {
//     let index = library.findIndex(book => book.title === title);
//     if (index !== -1) {
//         library.splice(index, 1, {
//             ...library[index],
//             copies: newCopies
//         });
//     }
//     return library;
// }

// function listBooks() {
//     return library.map(book => book.title).join(", ");
// }

// function extractBooks() {
//     return library.slice(0, 2);
// }

// function modifyBooks() {
//     if (library.length > 0) {
//         library.copyWithin(library.length - 1, 0, 1);
//     }
//     return library;
// }

// function resetCopies(newCount) {
//     library = library.map(book => ({ ...book, copies: newCount }));
//     return library;
// }

// function removeFirstBook() {
//     library.shift();
//     return library;
// }

// function addFirstBook(book) {
//     library.unshift(book);
//     return library;
// }

// Task7
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let nestedArray = [7, [8, 9, [10, 9]], 11];

// let combinedArray = arr1.concat(arr2);
// combinedArray.copyWithin(4, 0, 2);
// combinedArray.fill(0, 2, 4);
// combinedArray.pop();
// combinedArray.shift();
// combinedArray.unshift(10, 20);
// combinedArray.splice(2, 2, 30, 40);
// let slicedArray = combinedArray.slice(-3);
// let joinedString = slicedArray.join("-");
// let flatArray = nestedArray.flat(Infinity);
// let includesNine = flatArray.includes(9);
// let indexOfTen = flatArray.indexOf(10);
// let lastIndexOfNine = flatArray.lastIndexOf(9);
// flatArray.push(13);


// Task8
// let numbers = [10, 20, 30, 40, 50];
// let secondArray = [60, 70, 80];
// let concatenated = numbers.concat(secondArray);

// numbers.copyWithin(numbers.length - 2, 1, 3);
// numbers.fill(100, 0, 3);

// let popped = numbers.pop();
// let shifted = numbers.shift();

// numbers.unshift(5, 15);

// let joinedString = numbers.join("-");
// let slicedArray = numbers.slice(1, 4);

// numbers.splice(1, 2, 200, 300);

// let nestedArr = [1, [2, 3], [4, [5, 6]]];
// let flatArray = nestedArr.flat(Infinity);

// let contains50 = numbers.includes(50);
// let index30 = numbers.indexOf(30);
// let lastIndex20 = numbers.lastIndexOf(20);

// numbers.push(90, 100);
