const { mutipleMongooseToObject } = require('../../utli/mongoose');

const clothes = require("../../models/Course");


class MeController {

    async storedCourses(req, res, next) {
        try {
            const result = await clothes.countDocumentsDeleted()
            clothes.find({}).sortTable(req)
                .then(course => res.render("me/stored-courses", {
                    result,
                    course: mutipleMongooseToObject(course)
                }))
        } catch (error) {
            next(error);
        }
    }
    trashCourses(req, res, next) {
        clothes.findDeleted({})
            .then(course => res.render("me/trash-courses", {
                course: mutipleMongooseToObject(course)
            }))
            .catch(next)
    }
}
module.exports = new MeController();