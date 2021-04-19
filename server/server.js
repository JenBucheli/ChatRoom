const express = require("express");
const http = require("http");

const port = "8080";

const app = express();
const clientPath = __dirname + "/../client";

let counter = 0

app.use(express.static(clientPath));

const server = http.createServer(app);
const io = require('socket.io')(server);

server.listen(8080, () =>{
    console.log("server running on "+ port);
});

io.on('connection', (socket) => {
   counter++;

//observer
    socket.on('sendToAll', (message) =>{
        io.emit("displayMessage", (message));
    });

    socket.on('sendToMe', (message) =>{
        socket.emit("displayMessage", (message));
    });


    console.log(counter +' someone connected'+":");

});


