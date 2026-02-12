
// 1

// interface Userone{
//     id:Number;
//     username:String;
//     email:String
//     bio:String;
//     role:String
// }

// let human:Userone = {
//     id:13,
//     username:"Gio",
//     email:"gio@gmail.com",
//     bio:"i am Gio",
//     role:"admin"
// }

// function updateUser({ username, role }: Userone) {
//     console.log(`User${username} is an ${role}`)
    
// }


// 2

// interface Product {
//   name: string;
//   price: number;
//   category: string;
// }

// const products: Product[] = [
//   { name: "Laptop", price: 1200, category: "Electronics" },
//   { name: "Mouse", price: 25, category: "Electronics" },
//   { name: "Keyboard", price: 70, category: "Electronics" },
//   { name: "T-shirt", price: 40, category: "Clothing" },
//   { name: "Shoes", price: 90, category: "Clothing" }
// ];

// function uperfifty(products: Product[]): Product[] {
//   const result: Product[] = [];

//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 50) {
//       console.log(products[i]);
//     }
//   }

//   return result;
// }




// 3


// interface Config{
//     theme:String,
//     settings:{
//         notifications:Boolean,
//         volume:Number
//     }
// }



// function setupApp({ theme,settings }: Config) {
//     console.log(theme)
//     console.log(settings.notifications)

// }




// 4

// let T=[

// ]
// function WrapInArray<T>(value: T): T[]{
//     return [value]
// }


// 5


type ID = String | Number;

interface Employee {
  id: ID;
  name: string;
  position: string;
}

function getEmployeeInfo(employee: Employee): string {
  return `ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}`;
}
