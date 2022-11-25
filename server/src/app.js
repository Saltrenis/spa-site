import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.listen(8081)

app.get('/status', (req,res) => {
    console.log(req);
    res.send({
        message: 'helloworld!'
    })

})