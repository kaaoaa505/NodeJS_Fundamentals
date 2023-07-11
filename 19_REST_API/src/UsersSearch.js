import users from "./data/users.js";

const searchKeys = ["username", "job"];

const UsersSearch = (_req, res, queryParams) => {
  const resultArray = [];

  for (const key in queryParams) {
    if (searchKeys.includes(key)) {
      let result = users.filter((u) => {
        return u[key].toLowerCase().includes(queryParams[key].toLowerCase());
      });

      if(result){
        resultArray.push(...result);
      }
    }
  }

  res.writeHead(resultArray.length > 0 ? 200 : 404);
  res.end(JSON.stringify(resultArray));
};

export default UsersSearch;
