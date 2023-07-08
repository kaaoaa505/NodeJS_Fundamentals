import readline from "readline";

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your first name?\n`, (first_name) => {
  rl.question(`What's your middle name?\n`, (middle_name) => {
    rl.question(`What's your last name?\n`, (last_name) => {
      console.log(`✅ \t Welcome, ${first_name} ${middle_name} ${last_name} \t ✅`);

      rl.close();
    });
  });
});
