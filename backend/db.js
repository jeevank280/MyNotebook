const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"

// const connectToMongo = async ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     }).then(() => console.log('Connected Successfully'))

//     .catch((err) => { console.error(err); });
// }

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
    }
  };

module.exports = connectToMongo;