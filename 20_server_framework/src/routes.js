export default [{
    method: 'GET',
    path: '/home',
    onRequest: () => {
        return {
            statusCode: 200,
            data: 'Welcome to home page.'
        }
    }
},{
    method: 'GET',
    path: '/',
    onRequest: () => {
        return {
            statusCode: 200,
            data: 'Welcome to home page.'
        }
    }
}];