const router = require('./news');
const home = require('./home');
const slug = require("./course")

function route(app) {
    app.use('/news', router);
    app.use('/', home);
    app.use("/courses", slug);
}
module.exports = route;
