const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const clothes = new mongoose.Schema({
    name: String,
    describe: String,
    image: String,
    video: String,
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
}, );
mongoose.plugin(slug);

clothes.query.sortTable = function(req) {
    if (req.query.hasOwnProperty("_sort")) {
        const isType = ["desc", "asc"].includes(req.query.type)
        return this.sort({
            [req.query.column]: isType ? req.query.type : 'desc'
        })
    }
    return this
}
clothes.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'

});
module.exports = mongoose.model('clothes', clothes);