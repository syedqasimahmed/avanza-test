
const express = require('express');
const app = express();
const data = [
    {
        user_id: 1,
        balance: 20,
        id: 1
    }
]

const port = 3001; // You can choose any available port

// Define a route for the GET request
app.get('/api/account', (req, res) => {

    let filteredData = data

    if (req.query?.user_id != null) {
        const { user_id } = req.query
        filteredData = filteredData.filter(item => item.user_id == user_id)
    }
    // This is where you handle the GET request and send a response
    res.status(200).json({
        success: true,
        data: filteredData
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
