import { readFile, mkdir, rmdir, writeFile } from "node:fs";

for (let i = 0; i < 5; i++) {
  // mkdir --- make directory
  // rmdir --- remove directory
  mkdir(`./lomi-${i}`, (err) => {
    console.log(err);
  });

  rmdir(`./lomi-${i}`, (err) => {
    console.log(err);
  });
}

readFile("./text.txt", "utf8", (err, data) => {
  console.log(data);
});

writeFile("./lomi.txt", "this is my first note ❤️", (err) => {
  console.log(err);
});
