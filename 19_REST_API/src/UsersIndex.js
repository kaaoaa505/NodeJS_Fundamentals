import users from "./data/users.js";

const UsersIndex = (_req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(users));
};

export default UsersIndex;
