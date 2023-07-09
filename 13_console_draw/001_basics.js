import readline from "readline";

const CLEAR_CONSOLE = "\u001B[2J\u001B[0;0f";
process.stdout.write(CLEAR_CONSOLE);

readline.cursorTo(process.stdout, 0, 0);

const consoleWidth = process.stdout.columns;
const consoleHight = process.stdout.rows;

console.log(`The terminal currently ${consoleWidth}X${consoleHight}`);

let currentY = 2;
let lineLength = 10;

while (currentY < lineLength) {
  readline.cursorTo(process.stdout, 0, currentY);
  process.stdout.write("#");
  readline.cursorTo(process.stdout, 10, currentY);
  process.stdout.write("*");
  readline.cursorTo(process.stdout, 20, currentY);
  process.stdout.write("|");
  process.stdout.write("|");
  currentY++;
}
console.log("\n\n...End.");
