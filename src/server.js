import express from 'express';
import morgan from 'morgan';
import 'babel-polyfill';
import bodyParser from 'body-parser';

import reflectionRoutes from './routes/Reflection';

const app = express();

// Middelwares
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/api/v1/reflections', reflectionRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`listening on port ${port}`); });
