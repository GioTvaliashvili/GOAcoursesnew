// interface User {
//   id: number;
//   username: string;
//   email: string;
//   isAdmin?: boolean; 
// }

// function registerUser(user: User): void {
//   console.log(`მომხმარებელი ${user.username} წარმატებით დარეგისტრირდა`);
// }








// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// }

// const products: Product[] = [
//   { id: 1, name: "Laptop", price: 2500, category: "Electronics" },
//   { id: 2, name: "Phone", price: 1500, category: "Electronics" },
//   { id: 3, name: "Shirt", price: 80, category: "Clothing" },
//   { id: 4, name: "Shoes", price: 200, category: "Clothing" }
// ];

// function filterByCategory(items: Product[], category: string): Product[] {
//   return items.filter(product => product.category === category);
// }


// enum UserRole {
//   ADMIN,
//   EDITOR,
//   VIEWER
// }

// function checkPermission(role: UserRole): string {
//   switch (role) {
//     case UserRole.ADMIN:
//       return "You have full access";
//     case UserRole.EDITOR:
//       return "You can edit content";
//     case UserRole.VIEWER:
//       return "You can view content only";
//     default:
//       return "Unknown role";
//   }
// }

// function formatInput(input: string | number): string | number {
//   if (typeof input === "string") {
//     return input.toUpperCase();
//   } else {
//     return input * input;
//   }
// }

// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   employeeId: number;
//   department: string;
// }




// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }




// interface Task {
//   id: number;
//   title: string;
//   description: string;
//   completed: boolean;
// }

// const tasks: Task[] = [
//   { id: 1, title: "Learn TS", description: "Study interfaces", completed: false }
// ];

// function updateTask(id: number, updatedFields: Partial<Task>): Task | undefined {
//   const task = tasks.find(t => t.id === id);

//   if (task) {
//     Object.assign(task, updatedFields);
//   }

//   return task;
// }

