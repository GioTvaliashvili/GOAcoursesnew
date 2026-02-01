import {mkdir} from "node:fs"
for (let i = 0; i < 6; i++) {
  mkdir(`./lomi-${i}`, (err) => {
    console.log(err);
  });
}
