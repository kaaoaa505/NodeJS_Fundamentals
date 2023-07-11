import users from "./data/users.js";

const UserCreate = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
  });
  res.writeHead(200);
  res.end(JSON.stringify(users));
};

export default UserCreate;
