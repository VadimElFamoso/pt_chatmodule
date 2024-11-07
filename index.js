const app = require("express")();
const http = require("http").createServer(app);

const io = require("socket.io")(http);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

http.listen(3001, () => {
    console.log("Listening on port 3001");
});

io.on('connection', (socket) => {
    console.log("Connexion");

    socket.on('disconnect', () => {
        console.log("Deconnexion");
    });

    socket.on('chat_message', (msg) => {
        io.emit('chat_message', msg);
        console.log("message: " + msg);
    });
});


