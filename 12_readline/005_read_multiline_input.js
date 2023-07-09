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

for (const key in questions) {
  let responseLines = [];

  let response = await rl.question(questions[key]);
  responseLines.push(response);

  while (response.length > 0) {
    response = await rl.question("");
    responseLines.push(response);    
  }

  responses[key] = responseLines.join(' ');
}

const { first_name, middle_name, last_name } = responses;

console.log(
  `✅✅✅ \t Welcome with multiline, ${first_name} ${middle_name} ${last_name} \t ✅✅✅`
);

rl.close();