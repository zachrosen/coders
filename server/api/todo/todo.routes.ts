import * as express from "express";
import * as controller from "./todo.controller";

let router = express.Router();

router.post('/', controller.create)

export = router;
