//MQTT subscriber
var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:1883");
//var client = mqtt.connect('mqtt://10.0.129.2:1883')
var topic = "dataTRANS";

client.on("message", (topic, message) => {
  message = message.toString();
  console.log("Received:[", message, "]");
});

client.on("connect", () => {
  client.subscribe(topic);
});
