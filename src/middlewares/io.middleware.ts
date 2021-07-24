import { NextFunction, Request, Response } from "express"
import { Server } from "socket.io"
import { IRequest } from "../interfaces/req.interface"

export default function io(socketIO: Server) {
  return function (req: Request, _: Response, next: NextFunction) {
    ;(req as IRequest).io = socketIO
    next()
  }
}
