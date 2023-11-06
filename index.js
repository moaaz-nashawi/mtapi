const express = require('express');
const app = express();
const port = 80; // You can choose any available port you prefer

// Define a GET endpoint
app.get('/api/data', (req, res) => {
    // Replace this with the data you want to send as a response
    const responseData = {
        message: 'This is a sample GET endpoint response',
        data: [1, 2, 3, 4, 5],
    };

    res.json(responseData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});