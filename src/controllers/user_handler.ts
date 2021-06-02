import express, {Request, Response} from "express";
import {User, UserList} from "../models/user";

const store = new UserList();

const index = async (_req: Request, res: Response) => {
    const users = await store.index()
    res.json(users)
}

const user_list_routes = (app: express.Application) => {

    app.get('/users', (_req: Request, res: Response) => {
        try {
            res.send('this is the INDEX route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.get('/users/:id', (_req: Request, res: Response) => {
        try {
            res.send('this is the SHOW route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })

    app.delete('/users/:id', (_req: Request, res: Response) => {
        try {
            res.send('this is the DELETE route')
        } catch (err) {
            res.status(400)
            res.json(err)
        }
    })
}

export default user_list_routes
