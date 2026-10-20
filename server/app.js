
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoutes');
const movieRoute = require('./routes/movieRoutes')
const showRoute = require('./routes/showRoutes');
const theatreRoute = require('./routes/theatreRoutes');
const bookingRoute = require('./routes/bookingRoutes');


//connect to the database
connectDB(process.env.DB_URL);

const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());//parse incoming json request
app.use(cors());// allowing CORS requests
app.use('/api/user', userRoute);
app.use('/api/movie', movieRoute);
app.use('/api/show',showRoute);
app.use('/api/theatre', theatreRoute);
app.use('/api/booking', bookingRoute);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})