import clock from "clock";
import document from "document";
import { vibration } from "haptics";


// napTime to be user input
const napTime = '1';

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// set naptTime & allow user to start timer with button
const setNapTime = function(napTime) {
  this.napTime = napTime();
  // update
  myLabel.text = `${this.napTime}`;
  // CONTROL BUTTON 
  document.onkeypress = function(e) {
    console.log("Key pressed: " + e.key); //just prints to log that button has been pressed
    startCountdownTimer();
  }
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