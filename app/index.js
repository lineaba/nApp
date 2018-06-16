// nApp/app/index.js

import document from "document";
import * as messaging from "messaging";
import { HeartRateSensor } from "heart-rate";
import { vibration } from "haptics";

let background = document.getElementById("background");

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "color" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    console.log(`Setting background color: ${color}`);
    background.style.fill = color;
  }
};

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};


//Function to make device vibrate when heart rate falls below resting pulse rate

//resting pulse rate is hardcoded to 20 for now--we will figure out user input later
var resting_pulse_rate = 77;

var hrm = new HeartRateSensor();

hrm.start();

// Declare an event handler that will be called every time a new HR value is received.
hrm.onreading = function() {
  console.log(`Print pulse`);
  // make device vibrate if heart rate falls below resting pulse rate
  if (hrm.heartRate < resting_pulse_rate) {
    console.log(`target hit`); 
    vibration.start("ring");    
    hrm.stop();
  }
}
