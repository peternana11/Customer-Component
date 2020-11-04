
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


const userRoutes = require('./routes/users');


const app = express();


const CONNECTION_URI = "mongodb+srv://User21:" +
    process.env.MONGO_ATLAS_PW + "@it6203.lur1h.mongodb.net/IT6203_db?retryWrites=true&w=majority";

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(CONNECTION_URI);


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
