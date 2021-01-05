const express = require('express');
const mongoose = require('mongoose');

process.on("SIGINT", () => {
    console.log("Caught interrupt signal");
    process.exit();
});

process.on("SIGTERM", () => {
    console.log("Caught interrupt signal");
    process.exit();
});

(async () => {
    const app = express();

    console.log('connecting to DB');
    await mongoose.connect('mongodb://mongodb:27017/ew-docker');
    console.log('connected to DB');

    app.get('/', (req, res) => {
        console.log("Got a request");
        res.json({ message: "Hey, I'm Tom, the API" });
    });

    app.listen(3000, () => {
        console.log("Server is running");
    });
})();

