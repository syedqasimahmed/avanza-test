
const express = require('express');
const axios = require('axios');
const app = express();

const data = [
    {
        name: 'Qasim',
        id: 1
    }
]

const port = 3002; // You can choose any available port

// Define a route for the GET request
app.get('/api/users', async (req, res) => {

    // This is where you handle the GET request and send a response
    res.status(200).json({
        success: true,
        data
    });
});

app.get('/api/user/details', async (req, res) => {
    const { user_id } = req.query
    let user = data.filter(item => item.id == user_id).at(-1)
    const response = await axios.get('http://localhost:3005/api/account?user_id=' + user_id); // Replace with the actual URL of the other microservice
    user = {
        ...user,
        account: response.data
    }
    console.log(response.data)
    // This is where you handle the GET request and send a response
    res.status(200).json({
        success: true,
        data: user
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
