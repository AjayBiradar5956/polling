const mongoose = require('mongoose');

const db = "mongodb+srv://ajay362:ajay362QZ@cluster0.wahy4s2.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(db)
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log("error connecting to db", err);
    })