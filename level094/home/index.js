// 1) run time არის script რისი დახმარებიდაც ვუშვებთ nodes მაგალითად npm run error

// 2)  fs= file system
//     და სეგვიძლია ის დავაიმმპორტოთ ჯავასცრიპტში და მერე რაღაც ოპერაციები მოვახდინოთ

// 3) უკვე გადავიმეორე

// 4) node არის რითიც ვუშვებთ ჯავასკრიპტს ტერმინალში

// 5) npm = node package manager

// 6)
import { writeFileSync } from "node:fs";
import { mkdir } from "node:fs";
mkdir(`./folder`, (err) => {
  console.log(err);
});
