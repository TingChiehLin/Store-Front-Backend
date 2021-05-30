import express, { Request, Response, Application } from 'express'
import bodyParser from 'body-parser'

const app: express.Application = express()
const address: string = "0.0.0.0:8080"

app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

const server = app.listen(8080, function () {
    console.log(`starting app on: ${address}`)
})

export default server;
