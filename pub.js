//MQTT publisher
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1883')
var topic = 'dataTRANS'

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

client.on('connect', ()=>{
    var input_loop = function () {
        readline.question('Sent: ', function (message){
          client.publish(topic,message)
          input_loop()
        })
      }
      input_loop()
})