import express, { Request, Response, Application } from 'express'
import bodyParser from 'body-parser'

import user_list_routes from "./controllers/user_handler";
import product_list_routes from "./controllers/product_handler";
import order_list_routes from "./controllers/order_handler";

const app: express.Application = express()
const router = express()
const address: string = "0.0.0.0:8080"

app.use(bodyParser.json())

router.use((req,res,next) => {

})

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome Store Front!')
})

user_list_routes(app)
product_list_routes(app)
order_list_routes(app)

const server = app.listen(8080, function () {
    console.log(`starting app on: ${address}`)
})

export default server;
