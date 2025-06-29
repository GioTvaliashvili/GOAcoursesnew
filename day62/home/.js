// // function modifyArray() {

// //   let numsArray = [1, 2, 3];
// //   let strArray = ["a", "b", "c"];

// //   let combinedArray = numsArray.concat(strArray);


// //   combinedArray.copyWithin(4, 0, 3);


// //   combinedArray.fill("filled", 2, 5); 
// //   combinedArray.pop();

// //   combinedArray.shift();

// //   combinedArray.unshift(100, 200);

// //   return combinedArray;
// // }

// // console.log(modifyArray());


// function modifyObjectArray() {

//   let people = [{ name: "Alice" }, { name: "Bob" }];
//   let places = [{ city: "Paris" }, { city: "London" }];

//   let mergedArray = people.concat(places);

//   mergedArray.copyWithin(2, 0, 2);

//   mergedArray.fill({ city: "New York" }, mergedArray.length - 2);

//   mergedArray.pop();

//   mergedArray.shift();

//   mergedArray.unshift({ name: "Charlie" }, { name: "David" });


//   return mergedArray;
// }

// console.log(modifyObjectArray());


// function modifyMixedArray() {
//   let mixedArray = [1, 2, 3, 'four', 'five'];
//   let extendedArray = mixedArray.concat([true, false]);
//   extendedArray.copyWithin(0, 2, 4);
//   extendedArray.fill(0, 5, 8);
//   extendedArray.pop();
//   extendedArray.shift();
//   extendedArray.unshift(null, undefined);
//   return extendedArray;
// }

// console.log(modifyMixedArray());


// function comprehensiveArrayTask(arr1, arr2, arr3) {
//   let mergedArray = arr1.concat(arr2);
//   mergedArray.copyWithin(5, 0, 3);
//   mergedArray.fill(0, 6);
//   mergedArray.pop();
//   mergedArray.shift();
//   mergedArray.unshift(100, 200);
//   mergedArray.splice(2, 2, ...arr3);
//   let slicedArray = mergedArray.slice(-5);
//   return slicedArray.join(",");
// }


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6, 7];
// let arr3 = [8, 9];
// console.log(comprehensiveArrayTask(arr1, arr2, arr3));


// let students = ["Alice", "Bob", "Charlie"];
// let grades = [85, 92, 78];

// function addStudent(name, grade) {
//   students.unshift(name);
//   grades.unshift(grade);
//   return { students, grades };
// }

// function removeLastStudent() {
//   students.pop();
//   grades.pop();
//   return { students, grades };
// }

// function replaceGrade(index, newGrade) {
//   grades.splice(index, 1, newGrade);
//   return grades;
// }

// function updateGrades(newGrade) {
//   grades.fill(newGrade);
//   return grades;
// }


// console.log(addStudent("David", 88));
// console.log(removeLastStudent());
// console.log(replaceGrade(1, 95));
// console.log(updateGrades(100));


// let playlist = ["Song A", "Song B", "Song C", "Song D"];

// function addSong(title) {
//   playlist.unshift(title);
//   return playlist;
// }

// function removeLastSong() {
//   playlist.pop();
//   return playlist;
// }

// function moveSongs() {
//   playlist.copyWithin(playlist.length - 2, 0, 2);
//   return playlist;
// }

// function combinePlaylists(secondPlaylist) {
//   return playlist.concat(secondPlaylist);
// }


// console.log(addSong("Song X"));
// console.log(removeLastSong());
// console.log(moveSongs());
// console.log(combinePlaylists(["Song E", "Song F"]));

// let cartItems = ["Apple", "Banana", "Orange"];
// let prices = [1.5, 0.75, 1.25];

// function addItem(item, price) {
//   cartItems.unshift(item);
//   prices.unshift(price);
//   return { cartItems, prices };
// }

// function removeFirstItem() {
//   cartItems.shift();
//   prices.shift();
//   return { cartItems, prices };
// }

// function replaceItem(index, newItem, newPrice) {
//   cartItems.splice(index, 1, newItem);
//   prices.splice(index, 1, newPrice);
//   return { cartItems, prices };
// }

// function createReceipt() {
//   return cartItems.join(", ");
// }

// function applyDiscount(discountPrice) {
//   prices.fill(discountPrice);
//   return prices;
// }


// console.log(addItem("Mango", 2.0));
// console.log(removeFirstItem());
// console.log(replaceItem(1, "Grapes", 1.8));
// console.log(createReceipt());
// console.log(applyDiscount(0.99));


// let library = [
//   { title: "Book A", author: "Author A", copies: 5 },
//   { title: "Book B", author: "Author B", copies: 3 },
//   { title: "Book C", author: "Author C", copies: 7 }
// ];

// function addBook(book) {
//   library.push(book);
//   return library;
// }

// function removeLastBook() {
//   library.pop();
//   return library;
// }

// function updateBookCopies(title, newCopies) {
//   let index = library.findIndex(book => book.title === title);
//   if (index !== -1) {
//     library.splice(index, 1, { ...library[index], copies: newCopies });
//   }
//   return library;
// }

// function listBooks() {
//   return library.map(book => book.title).join(", ");
// }

// function extractBooks() {
//   return library.slice(0, 2);
// }

// function modifyBooks() {
//   library.copyWithin(library.length - 1, 0, 1);
//   return library;
// }

// function resetCopies(copies) {
//   library = library.map(book => ({ ...book, copies }));
//   return library;
// }

// function removeFirstBook() {
//   library.shift();
//   return library;
// }

// function addFirstBook(book) {
//   library.unshift(book);
//   return library;
// }

// console.log(addBook({ title: "Book D", author: "Author D", copies: 4 }));
// console.log(removeLastBook());
// console.log(updateBookCopies("Book B", 10));
// console.log(listBooks());
// console.log(extractBooks());
// console.log(modifyBooks());
// console.log(resetCopies(0));
// console.log(removeFirstBook());
// console.log(addFirstBook({ title: "Book E", author: "Author E", copies: 2 }));


