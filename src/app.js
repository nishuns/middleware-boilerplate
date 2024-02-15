const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res, next) => {
    req.status(200).send({ message: "API is working" });
    next();
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});