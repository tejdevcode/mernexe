require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workoutRoutes');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

//middleware
app.use((req, res, next) => {
   console.log(req.method, req.path);
   next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
   .then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   })
   .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
   });




