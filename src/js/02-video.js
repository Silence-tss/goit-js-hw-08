import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';
const locStorSet = function(e) {
    console.log(e.seconds);
    const startSec = Number(e.seconds);
    localStorage.setItem(currentTime, startSec)
}
player.on('timeupdate', throttle(locStorSet, 1000));
player.setCurrentTime(localStorage.getItem(currentTime)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
}); 