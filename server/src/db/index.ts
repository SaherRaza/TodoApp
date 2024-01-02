//connect to our database
import mongoose from 'mongoose';
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/note-app").then(() => {
    console.log("successfully connected");
}).catch((err) => {
    console.log("not connected", err);
})