const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const route = require("./routes")
const db = require('./config/db')
const methodOverride = require('method-override');
const SortMiddlewares = require("./app/middlewares/SortMiddlewares");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
db.connet()
app.use(methodOverride('_method'))
app.use(SortMiddlewares)
const hbs = handlebars.create({
    extname: '.hbs',
    helpers: require("./helpers/handlebars")


}, ); // Tạo đối tượng handlebars

app.engine('hbs', hbs.engine); // Sử dụng engine của handlebars
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

route(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});