import fs from "fs/promises";

const date = new Date();

await fs.appendFile("./003_append_file.txt", `${date.toUTCString()} \n`, {
  encoding: "utf-8",
});
