import clock from "clock";
import document from "document";
import { vibration } from "haptics";
import { me } from "appbit";
import * as CDTimer from "../common/CountdownTimer.js";

CDTimer.setNapTime('1');
setInterval(() => {console.log("1 minute has passed.")}, 60000) ;