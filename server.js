/**
 * Created by dell on 2018/6/8.
 */
var http=require('http');
var io=require('socket.io');
var ws=require('ws');

//http服务
var httpserver=http.createServer();
httpserver.listen(8000);

//io服务
var wsserver=io.listen(httpserver);
wsserver.on('connection',function(sock) {
    //这里是前台那个emit的接收，所以要有一直的名字和参数
    sock.on('a', function (data) {
        console.log(data);
        setInterval(update,1000);
        function update() {
          //  sock.emit('news',randomNum());
            sock.emit('news',randomNum());
            sock.emit('abc',randomNum());
            sock.emit('news2',randomNum());
        }
    });

});
function  randomNum() {
return Math.floor((Math.random()*100)+1);
}
//完成了浏览器到服务器的一个通信

