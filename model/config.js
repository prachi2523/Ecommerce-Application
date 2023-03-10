const mongoose=require('mongoose')
mongoose.set('strictQuery',true)

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {
  useNewUrlParser: "true",
});
mongoose.connection.on("error", (err) => {
  console.log("mogoose connection error", err);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});