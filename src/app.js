const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const port = 3000;

app.use(morgan('combined'));

const hbs = handlebars.create({ extname: '.hbs' });// Tạo đối tượng handlebars

app.engine('hbs', hbs.engine); // Sử dụng engine của handlebars
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render("home")

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
