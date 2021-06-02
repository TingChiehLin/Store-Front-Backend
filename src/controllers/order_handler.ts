import express, {Request, Response} from "express";
import {Order, OrderList} from "../models/order";

const store = new OrderList();

const index = async (_req: Request, res: Response) => {
    const orders = await store.index()
    res.json(orders)
}

const order_list_routes = (app: express.Application) => {

    app.get('/orders', (_req: Request, res: Response) => {
        try {
            res.send('this is the INDEX route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.get('/orders/:id', (_req: Request, res: Response) => {
        try {
            res.send('this is the SHOW route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.post('/orders/:id', (req: Request, res: Response) => {
        const article: Order = {
            id: req.params.id,
            id_each_product: Number(req.params.id_each_product),
            quantity: Number(req.body.quantity),
            user_id: req.body.price,
            status_of_order: req.body.category
        }
        try {
            res.send('this is the CREATE route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.put('/orders/:id', (req: Request, res: Response) => {
        const order: Order = {
            id: req.params.id,
            id_each_product: Number(req.params.id_each_product),
            quantity: Number(req.body.quantity),
            user_id: req.body.price,
            status_of_order: req.body.category
        }
        try {
            res.send('this is the EDIT route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.delete('/orders/:id', (_req: Request, res: Response) => {
        try {
            res.send('this is the DELETE route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })
}

export default order_list_routes
