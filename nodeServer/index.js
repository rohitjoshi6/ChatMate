//Node Server which will handle Socket IO connections

const io=require('socket.io')(8000)

const users={};
