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

  writefile(`./folder_${1}``./txt`, (err) => {
    console.log(err);
  });
  writefile(`./folder_${1}``./package.json`, (err) => {
    console.log(err);
  });
}
