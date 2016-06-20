import * as express from "express";
import {ITodoModel, Todo} from './todo.model';

export function create(req: express.Request, res: express.Response, next: Function) {
  let t = new Todo(req.body);
  t.save((err, t) => {
    if (err) return next(err);
    res.json(t);
  })
}
