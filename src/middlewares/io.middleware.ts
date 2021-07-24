import { Server } from "socket.io"
import { IRequest } from "../interfaces/req.interface"

export default function io(socketIO: Server) {
  return function (req: IRequest) {
    req.io = socketIO
  }
}
