function handleHomeRequest(routeObj) {
    console.log("✅ routeObj.query    ", routeObj.query);
  
    return {
      statusCode: 200,
      data: "Welcome to home page.",
    };
  }
  
  function handleTestRequest(routeObj) {
    console.log("✅ routeObj.body    ", routeObj.body);
  
    return {
      statusCode: 200,
      data: "Just for test POST API request.",
    };
  }

export default [
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
  {
    method: "POST",
    path: "/test",
    onRequest: handleTestRequest,
  },
];
