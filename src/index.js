import express from 'express';
import bodyParser from 'body-parser';
import './db/mongoose';

import userRouter from './routes/user';
import taskRouter from './routes/task';
const app  = express();


app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const port = process.env.PORT || 3000;
app.listen(port, (error) => {
    if(error){
        return console.log('Something went wrong', error);
    }
    console.log('Server is up on port ' + port);
});