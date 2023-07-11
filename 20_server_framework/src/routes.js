function handleHomeRequest(routeObj){
    console.log('✅ routeObj.query    ', routeObj.query)
    
    return {
        statusCode: 200,
        data: 'Welcome to home page.'
    }
}

export default [{
    method: 'GET',
    path: '/home',
    onRequest: handleHomeRequest
},{
    method: 'GET',
    path: '/',
    onRequest: handleHomeRequest
}];