import express, {Request, Response} from "express";
import {User, UserList} from "../models/user";

var jwt = require('jsonwebtoken');

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

const create = async (req: Request, res: Response) => {
    const user: User = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    }
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.TOKEN_SECRET)
    } catch (err) {
        res.status(401)
        res.json('Access denied, invalid token')
        return
    }
}

const verifyAuthToken = (req: Request, res: Response, next) => {
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)

        next()
    } catch (error) {
        res.status(401)
    }
}

const authenticate = async (req: Request, res: Response) => {
    const user: User = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    }
    try {
        const u = await store.authenticate(user.firstName, user.password)
        var token = jwt.sign({user: u}, process.env.TOKEN_SECRET);
        res.json(token)
    } catch (error) {
        res.status(401)
        res.json({error})
    }
}

const update = async (req: Request, res: Response) => {
    const user: User = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    }
    try {
        const authorizationHeader = req.headers.authorization
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        if(decoded.id !== user.id) {
            throw new Error('User id does not match!')
        }
    } catch(err) {
        res.status(401)
        res.json(err)
        return
    }

    try {
        const updated = await store.create(user)
        res.json(updated)
    } catch(err) {
        res.status(400)
        res.json(err + user)
    }
}

export default user_list_routes
