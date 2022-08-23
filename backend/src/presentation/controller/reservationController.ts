import { Request, Response, NextFunction } from "express";
import { callLog } from "../controller/concern/common";

/**
 * List users.
 */
 export let index = (req: Request, res: Response, next: NextFunction) => {
  callLog
  return res.status(200).send('reservation index')
};