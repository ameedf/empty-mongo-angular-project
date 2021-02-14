const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express()

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/api', require('./apiRouter'));

const port = 8080;
mongoose.connect(
	'mongodb://localhost:27017/my-db',
	{ useNewUrlParser: true, useUnifiedTopology: true }
).then(() => app.listen(port, () => console.log(`Server is running on port ${port}`)))
	.catch(error => console.log(error));

