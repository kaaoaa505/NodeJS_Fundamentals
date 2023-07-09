import readline from "node:readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = {
  first_name: `What's your first name?\n`,
  middle_name: `What's your middle name?\n`,
  last_name: `What's your last name?\n`,
};

const responses = {
  first_name: ``,
  middle_name: ``,
  last_name: ``,
};

for (let key in questions) {
  const response = await rl.question(questions[key]);
  responses[key] = response;
}

const { first_name, middle_name, last_name } = responses;

console.log(
  `✅✅✅ \t Welcome with promises, ${first_name} ${middle_name} ${last_name} \t ✅✅✅`
);

rl.close();
