const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = 5000;

// activate dotenv
dotenv.config();

// middlewares
const static = require('./middlewares/static');
const jsonParser = require('./middlewares/json-parser');
const cors = require('./middlewares/cors').cors;

// api routes
const mailchimpApi = require('./api/mailchimp');

// setting up static files path
app.use(static);
// setting up json parser
app.use(jsonParser);
// setting up cors
app.use(cors);

// setting up api routes
app.use('/api/mailchimp', mailchimpApi);

app.listen(port, () => console.log('Server has started on port ' + port));
