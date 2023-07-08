import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const first_name = await rl.question(`What's your first name?\n`);

const middle_name = await rl.question(`What's your middle name?\n`);

const last_name = await rl.question(`What's your last name?\n`);

console.log(
  `✅✅ \t Welcome with promises, ${first_name} ${middle_name} ${last_name} \t ✅✅`
);

rl.close();
