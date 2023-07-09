import readline from "readline";

const CLEAR_CONSOLE = "\u001B[2J\u001B[0;0f";
process.stdout.write(CLEAR_CONSOLE);

readline.cursorTo(process.stdout, 0, 0);

const lineLength = 10;

let currentY = 0;
let currentX = 0;

while (currentY <= lineLength) {
  currentX = 0;

  while (currentX <= lineLength * 2) {
    if (
      currentY === 0 ||
      currentY === lineLength ||
      currentX === 0 ||
      currentX === lineLength * 2
    ) {
      readline.cursorTo(process.stdout, currentX, currentY);
      process.stdout.write("#");
    }

    currentX++;
  }

  currentY++;
}

console.log("\n\n...End.");
