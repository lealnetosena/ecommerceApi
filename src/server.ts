import express from 'express'
import errors from 'middlewares/errors';
import routes from './routes';

const port = 3333;

const server = express()

server.use(express.json())

server.use(routes)
server.use(errors);

server.listen(port, () =>{
    console.log('Server is running(ecommerce)')
})
