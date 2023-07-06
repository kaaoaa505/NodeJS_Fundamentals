import fs from 'fs';

let stats = fs.statSync('./package.json');
console.info("---- Sync stats.size in bytes is: ", stats.size);

fs.stat("./package.json", (err, stats) => {
  if (err) {
    console.error("---- err is: ", err);
  } else {
    console.info("---- Callback stats.size in bytes is: ", stats.size);
  }
});

let statPromise = fs.promises.stat('./package.json');

statPromise.then(stats => {
  console.info("---- Promise stats.size in bytes is: ", stats.size);
});

let statAsyncFunction = async () => {
  let statAsync = await fs.promises.stat('./package.json');
  console.info("---- async await statAsync.size in bytes is: ", statAsync.size);
}
statAsyncFunction();