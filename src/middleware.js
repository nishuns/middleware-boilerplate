exports.isAPISuccess = (req, res) => {
    console.log('API succeeded');
    res.status(req.middleware.status).send(req.middleware.payload);
}

// write your code here