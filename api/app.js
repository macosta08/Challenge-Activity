const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

require('dotenv').config();

const app = express();

// Middlewares
// CORS
app.use(cors());
// Read and parse Body
app.use(express.json());
// Serve static content. Coverage Directory
//app.use('/coverage', express.static('coverage/lcov-report/'));
// Swagger documentation
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

//routes
app.use('/api', require('./routes/items'));

module.exports = app;
