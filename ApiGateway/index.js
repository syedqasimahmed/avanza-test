

// APIs is running on PORT 3001 and 3002

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const router = express.Router();



// Proxy requests to the actual API services
app.use('/api/users', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/api/user/details', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

app.use('/api/account', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

const port = 3005; // You can choose any available port
app.listen(port, () => {
    console.log(`API Gateway is listening on port ${port}`);
});
