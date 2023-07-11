function handleCustomParamRequest(routeObj) {
  console.log("✅ routeObj.urlParams    ", routeObj.urlParams);

  return {
    statusCode: 200,
    data: "Just for test POST API request.",
  };
}

function handleTestRequest(routeObj) {
  console.log("✅ routeObj.body    ", routeObj.body);

  return {
    statusCode: 200,
    data: "Just for test POST API request.",
  };
}
function handleHomeRequest(routeObj) {
  console.log("✅ routeObj.query    ", routeObj.query);

  return {
    statusCode: 200,
    data: "Welcome to home page.",
  };
}

export default [
  {
    method: "GET",
    path: "/custom/:id/param/:todo",
    onRequest: handleCustomParamRequest,
  },
  {
    method: "POST",
    path: "/test",
    onRequest: handleTestRequest,
  },
  {
    method: "GET",
    path: "/home",
    onRequest: handleHomeRequest,
  },
  {
    method: "GET",
    path: "/",
    onRequest: handleHomeRequest,
  },
];
