const EXPRESS = require('express')
const SOCKET = require('socket.io')
//app setup
let port = 4000;

let app = EXPRESS();

const SERVER = app.listen(port,function(){
    console.log('Server started at port ',port);
})

//Static Files 
//learing git and github
app.use(EXPRESS.static('public'));

//Socket setup

var io = SOCKET(SERVER);

io.on('connection',function(socket){
    console.log('made socket connection',socket.id)

    socket.on('chat',function(data){
        io.sockets.emit('chat',data)
    })
})