import users from "./data/users.js";

const UsersById = (_req, res, id) => {
  const user = users.filter((u) => {
    return Number(u.id) === Number(id);
  });

  res.writeHead(200);
  res.end(JSON.stringify(user));
};

export default UsersById;
