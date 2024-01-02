// create a server
import express from 'express'; 
import './db';
import cors from 'cors';

import noteRouter from "./router/note"
const app = express();
app.use(cors()); // adding another middleware

// to read the request from post api we need to setup middleware functions,
//  this will parse post request coming from fetch.post() methods
app.use(express.json());

// this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));


app.use("/note", noteRouter);

// localhost:8000/note/create
// localhost:8000/note
// localhost:8000/note/noteId
// localhost:8000/note/noteId


// listen to some port
app.listen(8000, () => {
    console.log("listening");
})

