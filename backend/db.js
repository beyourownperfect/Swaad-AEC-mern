// const mongoose = require('mongoose')
// const mongoURI = 'mongodb+srv://sandeep:sandeepaec@cluster0.t3rsmiv.mongodb.net/swaad-mern?retryWrites=true&w=majority'
// const mongoDB = async () => {
//     try {
//       await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//       console.log('Connected to MongoDB')
//       const fetched_data = await mongoose.connection.db.collection("food-items");
//       fetched_data.find({}).toArray( function( err, data){
//         if(err) console.log(err);
//         else console.log(data);
//       })

//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error.message)
//     }
//   }
  
//   module.exports = mongoDB

const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://sandeep:sandeepaec@cluster0.t3rsmiv.mongodb.net/swaad-mern?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the database');

    const foodItemsCollection = mongoose.connection.db.collection('food-items');
    const foodItems = await foodItemsCollection.find({}).toArray();
    // console.log(foodItems);
  } catch (err) {
    console.error('Error connecting to the database', err);
  }
}

module.exports = connectToDatabase;





