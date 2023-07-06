import fs from "fs/promises";

let stat = await fs.stat("./002_test.csv");
console.info("---- stat.size in bytes is: ", stat.size);

let fileContent = await fs.readFile('./002_test.csv', {encoding: 'utf-8'});
console.info("\n---- fileContent is: \n", fileContent);

let lines = fileContent.split('\n');
console.info("\n---- lines is: \n", lines);

let titles = lines[0].split(',');
console.info("\n---- titles is: \n", titles);

let contents = lines.slice(1);
console.info("\n---- contents is: \n", contents);

