// before writing any code inside our js files, we created two separate folders within our socket_chat workspace
// one for our functionality and ux(client), the other for the backend to communicate with the server(server).
// to begin, we created a package.json file (npm init) within each nested folder. this allowed npm to then install and store
// the node modules folder inside(npm install node-modules) which we would be using for functions such as require, and others
// this also allowed for our socket.io download to be stored and accessed by the files we would be using.(npm install socket.io)
// once we have set up our socket.io server we can then switch over to our client script file and import our io from socket.io (import { io} from "socket.io-client")
// we then create our socket variable to use in the script and make it equal to (io("http://localhost:3000")) which is our server

// // our first line of code calls the socket.io in the port of our server (port(3000)). allowing us to utilize its code in the form of a function.
// const io = require('socket.io')(3000, {
// // the cors mechanism supports secure cross-origin requests and data transfers between browsers and servers
// // we pass in an options param to the function (cors) and have it equal to an array of origins and we pass in our client
//     cors: {
//         origin: ['http://localhost:8081', 'https://admin.socket.io']
//     }
// });
// // here we create a function that runs every time a client connects to the server, giving a socket instance for each one of them
// io.on('connection', socket => {
//     console.log(socket.id);
// // we then download the client version of the library that we will be using (npm i socket.io-client), we re
//     socket.on("send-message", (message, room) => {
//         if (room === ''){
//             socket.broadcast.emit('recieve-message', message)
//         } else {
//             socket.to(room).emit('recieve-message', message)
//         }
//     });
//     socket.on('join-room', (room, cb )=> {
//         socket.join(room)
//         cb(`Joined ${room}`)
//     })
// });



