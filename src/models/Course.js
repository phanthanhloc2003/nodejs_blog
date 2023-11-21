const mongoose = require('mongoose');

const { Schema } = mongoose;
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const clothes = new mongoose.Schema({
    name: String,
    describe: String,
    image: String,
    video: String,
    slug: { type: String, slug: 'name' }

}, {
    timestamps: true,
});

module.exports = mongoose.model('clothes', clothes)