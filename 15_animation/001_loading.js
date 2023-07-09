import readline from "readline";

const CLEAR_CONSOLE = "\u001B[2J\u001B[0;0f";
process.stdout.write(CLEAR_CONSOLE);

const moveCursorToBottom = () => {
  readline.cursorTo(process.stdout, 0, process.stdout.rows - 1);
};

process.stdout.write(`Loading... 0%`);

let percent = 0;
const customInterval = setInterval(() => {
  if (percent < 100) percent++;

  readline.cursorTo(process.stdout, 0, 0);
  process.stdout.write(`Loading... ${percent}%`);

  moveCursorToBottom();

  if (percent === 100) {
    clearInterval(customInterval);
    console.log('Loading with clear interval completed successfully.')
  }
}, 100);
