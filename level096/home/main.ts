// interface User{
//     id:number,
//     username:string,
//     email:string,
//     isAdmin:boolean
// }

// function info({username}: User){
//     return `მომხმარებელი ${username} წარმატებით დარეგისტრირდა.`
// }


// interface Product {
//   id:number|string; 
//   name: string;
//   price: number;
//   category: string;
// }

// const products: Product[] = [
//   {id:"HST5XZ",name: "Laptop", price: 1200, category: "Electronics" },
//   { id:"f4US2",name: "Mouse", price: 25, category: "Electronics" },
//   { id:"HGSI4",name: "Keyboard", price: 70, category: "Electronics" },
//   { id:"139DTA2",name: "T-shirt", price: 40, category: "Clothing" },
//   { id:"TXH21SR",name: "Shoes", price: 90, category: "Clothing" }
// ]

// function filterByCategory(items: Product[], category: string): Product[] {
//   const result: Product[] = []; 
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].category === category) {
//       result.push(items[i]); 
//     }
//   }
//   return result; 
// }


// 3?

//4
// function formatInput(input: string | number): string | number {
//   if (typeof input === "string") {
//     return input.toUpperCase(); 
//   } else {
//     return input * input;
//   }
// }


// console.log(formatInput("hello")); 
// console.log(formatInput(5));       



//5
// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   employeeId: number;
//   department: string;
// }


// type StaffMember = Person & Employee;


// const staff: StaffMember = {
//   name: "Gio",
//   age: 25,
//   employeeId: 123,
//   department: "IT"
// };

// console.log(staff);

//6
// function getFirstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }


// const numbers = [10, 20, 30];
// const firstNum = getFirstElement(numbers); 
// console.log(firstNum);

// const names = ["Gio", "Ana"];
// const firstName = getFirstElement(names); 
// console.log(firstName);

//7

// const point: readonly [number, number] = [10, 20];



// console.log(point[0], point[1]); 


//8
// interface Task {
//   id: number;
//   title: string;
//   description: string;
//   completed: boolean;
// }


// function updateTask(id: number, updates: Partial<Task>) {
//   console.log(`Updating task ${id}:`, updates);
// }


// updateTask(1, { title: "New title" }); 
// updateTask(2, { completed: true, description: "Finished task" });
