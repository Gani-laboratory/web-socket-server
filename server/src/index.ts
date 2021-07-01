import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const PORT = 3000;

const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket: Socket) => {
  console.log("New client has been connected")
  socket.on("newClient", (data) => {
    console.log(data);
  })

  socket.join("group")
  socket.on("sendGroupMsg", (data) => {
    io.to("group").emit("broadcast", data)
  })
  
  socket.on("sendMsg", (data) => {
    socket.emit("receiveMsg", data)
  })
});

httpServer.listen(PORT, () => {
  console.info(`Web socket running on port ${PORT}`)
});