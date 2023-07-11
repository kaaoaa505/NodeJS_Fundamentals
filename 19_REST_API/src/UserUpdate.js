import users from "./data/users.js";

const UserUpdate = (req, res, id) => {
  const userIndex = users.findIndex((u) => {
    return Number(u.id) === Number(id);
  });

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);

    users[userIndex] = newUser;
  });

  res.writeHead(200, null, {
    "Content-Type": "application/json",
  });
  
  res.end(JSON.stringify(users));
};

export default UserUpdate;
