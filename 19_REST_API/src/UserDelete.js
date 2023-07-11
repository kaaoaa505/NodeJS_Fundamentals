import users from "./data/users.js";

const UserDelete = (_req, res, id) => {
  const userIndex = users.findIndex((u) => {
    return Number(u.id) === Number(id);
  });

  if (userIndex >= 0) {
    users.splice(userIndex, 1);

    res.writeHead(200, null, {
      "Content-Type": "application/json",
    });
  } else {
    res.writeHead(404, null, {
      "Content-Type": "application/json",
    });
  }

  res.end(JSON.stringify(users));
};

export default UserDelete;
