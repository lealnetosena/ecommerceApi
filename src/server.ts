import "express-async-errors"
import express from 'express'

import { seed } from "seed";
import errors from 'middlewares/errors';
import routes from './routes';

const port = 3333;



function runServer() {
    const server = express()

    server.use(express.json())

    server.use(routes)
    server.use(errors);

    server.listen(port, () =>{
        console.log('Server is running(ecommerce)')
    })
}

seed().then(() =>{
    runServer()
})