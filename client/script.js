let socket = io.connect();

let target = document.getElementById("target");

document.getElementById("sendAll").addEventListener("click", function (){
    let message = document.getElementById("message").value
    socket.emit('sendToAll', (message));
});

document.getElementById("sendMe").addEventListener("click", function (){
    let message = document.getElementById("message").value
    socket.emit('sendToMe', (message));
});

socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
});
