import clock from "clock";
import document from "document";
import { vibration } from "haptics";
import { me } from "appbit";


// napTime to be user input
export const napTime = '1';

// Get a handle on the <text> element
export const myLabel = document.getElementById("myLabel");
 
// button function: up to start countdown timer
export const listenButton = function() {
  // CONTROL BUTTON to start countdown
  document.onkeypress = function(e) {
    if (e.key === "up") {
      console.log("Key pressed: " + e.key); //just prints to log that button has been pressed
      console.log("Countdown started.")
      startCountdownTimer();
    }
    else {
      console.log("Key pressed: " + e.key); //just prints to log that button has been pressed
      me.exit(); 
    }
  }
}

// set naptTime & allow user to start timer with button
export const setNapTime = function(t) {
  napTime = t;
  // show nap time on clockface
  myLabel.text = `${napTime}`;
  // CONTROL BUTTON
  listenButton();
}

// start countdown timer
export const startCountdownTimer = function() {
  let cdTime = napTime + 1;
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
  }
}

// update minutes left on clock face
export const updateTimer = (minsLeft) => {
    myLabel.text = `${minsLeft}`;
}