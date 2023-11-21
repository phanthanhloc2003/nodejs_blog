
const mongoose = require('mongoose');


async function connet() {
    try {
        await mongoose.connect("mongodb://localhost:27017/shop");
        console.log("connet successfully !!! 🎉")
    }
    catch (err) {
        console.log("connet failed !!!")
    }

}
module.exports = { connet }
