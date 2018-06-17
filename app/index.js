// nApp/app/index.js

import document from "document";
import * as messaging from "messaging";
import { HeartRateSensor } from "heart-rate";
import { vibration } from "haptics";
import { me } from "appbit";
import * as CDTimer from "../common/CountdownTimer.js";

let background = document.getElementById("background");

var resting_pulse_rate = 65;
var time = '20';

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`Ap`);
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "bpm") {
    let bpm = JSON.parse(evt.data.newValue);
    resting_pulse_rate = bpm.name;
  }
  else if (evt.data.key === "minutes") {
    console.log(`Ap`);
    let minutes = JSON.parse(evt.data.newValue);
    time = minutes.name;
//       CDTimer.setNapTime('90');
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

var hrm = new HeartRateSensor();

hrm.start();

// Declare an event handler that will be called every time a new HR value is received.
hrm.onreading = function() {
  console.log(`Reading pulse`);
  // make device vibrate if heart rate falls below resting pulse rate
  if (hrm.heartRate < resting_pulse_rate) {
    console.log(`target hit`);
    vibration.start("ring");
    hrm.stop();
  }
}

// set countdown
CDTimer.setNapTime(time);
setInterval(() => {console.log("1 minute has passed.")}, 60000) ;
