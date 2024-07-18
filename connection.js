const mongoose = require("mongoose")

async function connectMongoDb(url) {
    mongoose
    return mongoose.connect(url)
}
module.exports = {
    connectMongoDb,
}