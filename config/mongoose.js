const mongoose = require('mongoose')
require('dotenv').config()

const mongoConnect = () =>  mongoose.connect(process.env.MONGO_URL,console.log('Database Connected'));

module.exports = {mongoConnect};


// module.exports = {
//     const mongoConnect = mongoose.connect(
//         process.env.MONGO_URL,
//         { useNewUrlParser: true }
//     ).then(() => console.log('Database Connected :) '))
// } 
