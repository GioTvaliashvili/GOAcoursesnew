// // import { mkdir, rmdir } from "node:fs";
// import { cpus } from "node:os";

// // for (let i = 1; i < 6; i++) {
// //   mkdir(`./folder_${i}`, (err) => {
// //     console.log(err);
// //   });
// // }

// // for (let i = 1; i < 6; i++) {
// //   rmdir(`./folder_${i}`, (err) => {
// //     console.log(err);
// //   });
// // }
// console.log(cpus());

import { mkdir } from "node:fs";
for (let i = 1; i < 6; i++) {
  mkdir(`./folder_${i}`, (err) => {
    console.log(err);
  });
  mkdir(`./folder_${i}``./cw${i}`, (err) => {
    console.log(err);
  });
  mkdir(`./folder_${i}``./hw${i}`, (err) => {
    console.log(err);
  });
}
