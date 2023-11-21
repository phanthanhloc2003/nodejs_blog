const clothes = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../utli/mongoose')

class HomeController {
    async index(req, res) {
        try {
            const courses = await clothes.find({});

            res.render('home', { coursess: mutipleMongooseToObject(courses) });
        } catch (error) {
            console.error('Error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }


    }

    search(req, res) {
        res.render('search');
    }
}
module.exports = new HomeController();
