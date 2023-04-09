import Player from '@vimeo/player';

const vimeo_player = document.querySelector("#vimeo-player");
const player = new Player(vimeo_player);

const throttle = require('lodash.throttle');

player.setCurrentTime(
    Number(localStorage.getItem("videoplayer-current-time"))
).catch(function(error) {
    throw error;
});

player.on('timeupdate', 
    throttle(()=>{
        player.getCurrentTime().then(function(seconds) {
            localStorage.setItem("videoplayer-current-time", seconds);
        }).catch(function(error) {
            throw error;
        });
    }, 1000) 
);