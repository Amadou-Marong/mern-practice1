const mongoose = require("mongoose");
const db =
  "mongodb+srv://marongamadou6:1bmE6bbXK13g2ifJ@cluster0.0cjakhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;