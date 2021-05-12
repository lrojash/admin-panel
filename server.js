const AppRouter = require('./routes/AppRouter');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { Connection } = require('pg');


const app = express();

const PORT = process.env.PORT || 8001;
// Middleware
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable('X-Powerd-By');
app.get('/', (req, res) => res.json({ message: 'Server Working' }));
app.use('/api', AppRouter);


app.listen(PORT, async () => {
    try {
        await Connection
        console.log('Database connected');
        console.log(`APP LISTENING ON PORT ${PORT}`);
    } catch (error) {
        throw new Error('Connection Error');
    }
});