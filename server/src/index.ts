import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket: Socket) => {
  console.log("New client has been connected")
  socket.on("join", (data) => {
    console.log(data);
  })
  socket.on("sendMsg", (data) => {
    socket.emit("receiveMsg", data)
  })
});

httpServer.listen(3000);