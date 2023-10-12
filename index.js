const express = require('express');
const cors = require('cors')
const userRoutes = require('./routes/userRoute')
const adminRoutes = require('./routes/adminRoute')
const cookieParser = require('cookie-parser')
const { mongoConnect } = require('./config/mongoose')
const path = require('path');


const app = express()
mongoConnect()

app.use('/images', express.static(path.join(__dirname, './images')));


app.use(cors({
    credentials: true,
    origin:['http://localhost:4200']
}))

app.use(express.json());
app.use(cookieParser());

console.log('Entering into the routes');

app.use('/api/user',userRoutes);
console.log('using adminRoutes');
app.use('/api/admin',adminRoutes);

app.listen(3000, () => console.log('Listening on port 3000'));