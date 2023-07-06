import fs from "fs/promises";

const date = new Date();

await fs.writeFile("./003_write_file.txt", `${date.toUTCString()} \n`, {
  encoding: "utf-8",
});

const person = {
    name: 'Khaled Allam',
    age: 34,
    job: 'Senior Full Stack Software Engineer'
};

const personToCsv = Object.keys(person).join(',') + '\n' + Object.values(person).join(',');

await fs.writeFile("./003_write_person.csv", personToCsv, {
  encoding: "utf-8",
});