
// const university = {
//   name: "თბილისის სახელმწიფო უნივერსიტეტი",
//   departments: 7,
//   website: "https://www.tsu.ge",
//   ratings: {
//     student1: 4.5,
//     student2: 4.8,
//     student3: 4.2
//   }
// };


// console.log("უნივერსიტეტის მონაცემები:");
// for (let key in university) {
//   console.log(`${key}:`, university[key]);
// }


// console.log("შეიცავს თუ არა 'scholarship' თვისებას?", university.hasOwnProperty("scholarship"));

// const updatedUniversity = Object.assign({}, university, { studentsCount: 23000 });
// console.log("განახლებული ობიექტი (studentsCount დამატებით):", updatedUniversity);

// Object.freeze(university);

// university.name = "ივანე ჯავახიშვილის სახელობის უნივერსიტეტი";
// university.newProp = "ახალი თვისება";
// delete university.departments;

// console.log("ცვლილების შემდეგ university ობიექტი (გაყინულია):", university);

// console.log("გაყინულია university ობიექტი?", Object.isFrozen(university));





// let sportsClub = {
//   clubName: "დინამო თბილისი",
//   sportType: "ფეხბურთი",
//   foundedYear: 1925,
//   achievements: {
//     title1: "საბჭოთა კავშირის თასი - 1976",
//     title2: "უეფას თასი - 1981",
//     title3: "ეროვნული ჩემპიონატი - 2020"
//   }
// };


// console.log("ობიექტის თვისებების სია:", Object.keys(sportsClub));


// console.log("ობიექტის მნიშვნელობების სია:", Object.values(sportsClub));

// console.log("არსებობს თუ არა 'sponsors' ველი?", sportsClub.hasOwnProperty("sponsors"));


// let updatedClub = Object.assign({}, sportsClub, { stadiumCapacity: 54000 });
// console.log("განახლებული კლუბის ობიექტი:", updatedClub);


// Object.freeze(sportsClub);


// sportsClub.clubName = "დინამო ბათუმი";
// sportsClub.newField = "ცდად დამატებული ველი";
// delete sportsClub.foundedYear;

// console.log("ცვლილების შემდეგ sportsClub ობიექტი:", sportsClub);


// console.log("გაყინულია sportsClub ობიექტი?", Object.isFrozen(sportsClub));





// let hotel = {
//   hotelName: "Radisson Blu Iveria",
//   stars: 5,
//   location: "თბილისი, საქართველო",
//   guestReviews: {
//     guest1: "შესანიშნავი მომსახურება და სისუფთავე",
//     guest2: "ლამაზი ხედები და კომფორტული ნომრები",
//     guest3: "კარგი მდებარეობა, მაგრამ ხმაურიანი ქუჩა"
//   }
// };

// console.log("სასტუმროს თვისებები და მნიშვნელობები:");
// for (let key in hotel) {
//   console.log(`${key}:`, hotel[key]);
// }


// console.log("გააჩნია თუ არა 'spa' ველი?", hotel.hasOwnProperty("spa"));


// let updatedHotel = Object.assign({}, hotel, { roomsCount: 250 });
// console.log("განახლებული ობიექტი (roomsCount დამატებით):", updatedHotel);


// Object.freeze(hotel);

// hotel.stars = 4;
// hotel.newField = "ახალი ველი";
// delete hotel.location;

// console.log("ცვლილების შემდეგ hotel ობიექტი (გაყინულია):", hotel);


// console.log("გაყინულია hotel ობიექტი?", Object.i)
 



let cinema = {
  cinemaName: "კავეა კინო",
  moviesCount: 12,
  location: "თბილისი, საქართველო",
  movieReviews: {
    user1: "ფანტასტიკური ეკრანი და ხმა!",
    user2: "სასიამოვნო გარემო, მაგრამ ძვირი ბილეთები",
    user3: "კარგი ადგილმდებარეობა და სწრაფი მომსახურება"
  }
};


console.log("კინოს ობიექტის თვისებები და მნიშვნელობები:");
for (let key in cinema) {
  console.log(`${key}:`, cinema[key]);
}

console.log("გააჩნია თუ არა 'vipSeats' ველი?", cinema.hasOwnProperty("vipSeats"));

let updatedCinema = Object.assign({}, cinema, { ticketPrice: 15.5 });
console.log("განახლებული კინოს ობიექტი (ticketPrice დამატებით):", updatedCinema);


Object.freeze(cinema);

cinema.moviesCount = 10;
cinema.newField = "test";
delete cinema.location;

console.log("ცვლილების შემდეგ cinema ობიექტი (გაყინულია):", cinema);

console.log("გაყინულია cinema ობიექტი?", Object.isFrozen(cinema));
