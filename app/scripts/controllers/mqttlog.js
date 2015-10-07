'use strict';

/**
 * @ngdoc function
 * @name linuxBoxApp.controller:MqttlogCtrl
 * @description
 * # MqttlogCtrl
 * Controller of the linuxBoxApp
 */
angular.module('linuxBoxApp')
  .controller('MqttlogCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
 
var client = new Paho.MQTT.Client("192.168.1.30", Number(9001), "testjs");
    
// called when the client connects
this.onConnect = function () {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  //client.subscribe("/World");
  client.subscribe("SebHome/HugoRoom");
  //message = new Paho.MQTT.Message("Hello");
  //message.destinationName = "/World";
  //this.client.send(message); 
}

// called when the client loses its connection
 this.onConnectionLost = function(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
this.onMessageArrived = function (message) {
  console.log("onMessageArrived:"+message.payloadString);
}
    
       // Create a client instance


// set callback handlers
client.onConnectionLost = this.onConnectionLost;
client.onMessageArrived = this.onMessageArrived;

// connect the client
client.connect({onSuccess:this.onConnect});

  });
