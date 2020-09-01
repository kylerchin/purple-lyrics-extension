/**
 *
 * @param {HTMLVideoElement} video
 * @returns {{total: number, percent: number}}
 */
function retrieveTimestamp(video) {
    var currentPlayed = 0;
    var timestamp = video.currentTime;

    return {
        total: timestamp
}}

function retrieveTime() {
return getPlayedTime(document.getElementsByClassName('video-stream html5-main-video')[0])}

retrieveTime()
//retrieveTime calls the # of seconds since the beginning of the video. This code is super messy :)
