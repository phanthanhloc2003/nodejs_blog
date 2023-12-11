const router = require('./news');
const home = require('./home');
const slug = require("./course")
const me = require("./me")

function route(app) {
    app.use('/news', router);
    app.use('/', home);
    app.use("/courses", slug);
    app.use("/me", me);
}
module.exports = route;
