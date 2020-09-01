/**
 *
 * @param {HTMLVideoElement} video
 * @returns {{total: number, percent: number}}
 */

var videoElementYT = document.getElementsByClassName('video-stream html5-main-video')[0];

function retrieveTimestamp(video) {
    var currentPlayed = 0;
    var timestamp = video.currentTime;

    return {
        total: timestamp
}}

function retrieveTime() {
return getPlayedTime(videoElementYT)}

retrieveTime()
//retrieveTime calls the # of seconds since the beginning of the video. This code is super messy :)

//Goal: use Video events such as ended, pause, play, playing, progress, seeked, seeking, stalled, suspend, waiting according to the Events page in this. This will make it easier as we don't need to use a loop, we can just load the JSON data and have it wait until the next timestamp to change the div elements. We also need to load the Line Distribution information and setup a backend + UI for all for all of this to be volunteer. We also need to figure out what the lyrics will look like on screen to be easy, legible, and understandible. 
