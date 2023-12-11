const mongoose = require('mongoose');


async function connet() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect("mongodb://localhost:27017/shop", { useNewUrlParser: true });
        console.log("connet successfully !!! 🎉")
    } catch (err) {
        console.log("connet failed !!!")
    }

}
module.exports = { connet }