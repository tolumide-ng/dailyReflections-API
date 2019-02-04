import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

// Middelwares
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.get('/', (req, res) => {
    return res.status(200).send({'message': 'YAY! Congratulations on your first endpoint'})
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> {console.log(`listening on port ${port}`)});
