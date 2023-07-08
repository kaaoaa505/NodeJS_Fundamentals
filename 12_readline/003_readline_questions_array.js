import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  `What's your first name?\n`,
  `What's your middle name?\n`,
  `What's your last name?\n`,
];

const responses = [];

for await (let question of questions) {
  const response = await rl.question(question);
  responses.push(response);
}

const [first_name, middle_name, last_name] = responses;

console.log(
  `✅✅✅ \t Welcome with promises, ${first_name} ${middle_name} ${last_name} \t ✅✅✅`
);

rl.close();
