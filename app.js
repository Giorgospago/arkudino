var five = require("johnny-five");
var io = require('socket.io-client');

var socket = io('https://bot.develobird.gr');

var board = new five.Board('/dev/ttyUSB0');
board.on("ready", function() {

    var led = new five.Led(13);
    socket.on('led', function(data){
        if(data == 'on'){
            led.on();
        }
        else{
            led.off();
        }
    });

});