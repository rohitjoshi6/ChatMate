const socket= io("http://localhost:8000");
const form = document.getElementById('send-container');
const messageInput= document.getElementById('messageInp');
const messageContainer= document.querySelector('.container');

const name=prompt("Enter your name to join ");
socket.emit('new-user-joined', name);

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add(position)
    messageContainer.append(messageElement);

}

socket.on('user-joined', name =>{
    append(`${name} joined the chat`, `right`)

})