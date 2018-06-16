import clock from "clock";
import document from "document";
import { vibration } from "haptics";
import { me } from "appbit";


// napTime to be user input
const napTime = '1';

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
 
// button function: up to start countdown timer
const listenButton = function() {
  // CONTROL BUTTON to start countdown
  document.onkeypress = function(e) {
    if (e.key === "up") {
      console.log("Key pressed: " + e.key); //just prints to log that button has been pressed
      startCountdownTimer();
    }
    else {
      console.log("Key pressed: " + e.key); //just prints to log that button has been pressed
      me.exit(); //doesn't exit, need to check how to exit app on down arrow
    }
  }
}

// set naptTime & allow user to start timer with button
function setNapTime(t) {
  napTime = t;
  // update
  myLabel.text = `${napTime}`;
  // CONTROL BUTTON
  listenButton();
}

// start countdown timer
const startCountdownTimer = function() {
  napTime++;
  // updates the clock every minute
  clock.granularity = "minutes";
  // start ticking (per minute) the clock
  clock.ontick = (evt) => {
    napTime--;
    // stop ticking clock & ring alarm
    if (napTime === 0) {
      clock.granularity = "off";
      vibration.start("ring");
      console.log("Fitbit alarm vibrating.")
    }
    updateTimer(napTime);
  }
}

// update minutes left on clock face
const updateTimer = (minsLeft) => {
    myLabel.text = `${minsLeft}`;
}