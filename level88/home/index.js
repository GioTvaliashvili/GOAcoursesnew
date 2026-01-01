import { mkdir } from "node:fs";

for (let i = 1; i < 6; i++) {
  mkdir(`./folder_${i}`, (err) => {
    console.log(err);
  });
}
