// exports this function so that it can be required by another file (server.js)
// must pass in app because it contains the express application

module.exports = function (app) {
    // if no matching route is found default to index.html
    app.get('/', function (req, res) {
        red.send('Hello from simplereact project');
    })
}