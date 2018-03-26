const apiUrl = {
    server : 'http://localhost:3000'
}

if (process.env.NODE_ENV == 'production') {
    apiUrl.server = 'https://legaldekerangal-timothee.azurewebsites.net/'
}

module.exports = apiUrl;