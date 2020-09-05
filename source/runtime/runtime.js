/**
 *
 * @param {HTMLVideoElement} video
 * @returns {{total: number, percent: number}}
 */

console.log("Purple Lyrics Runtime")

var videoElementYT = document.getElementsByClassName('video-stream html5-main-video')[0];

function retrieveTimestamp(video) {
    var timestamp = video.currentTime;

    return {
        timestamp
}}

function retrieveTime() {
return retrieveTimestamp(videoElementYT)
}

//Is selector valid
const queryCheck = s => document.createDocumentFragment().querySelector(s)

const isSelectorValid = selector => {
  try { queryCheck(selector) } catch { return false }
  return true
}
// STOLEN CODE LMAO

 ( function(win, doc) {
    var audioPlayer = doc.getElementById("audiofile");
    var subtitles = doc.getElementById("subtitles");
    var syncData = [
        {"end": "10","start": "0","text": "0-10-sec-test" },
          {"end": "20","start": "10","text": "10-20-sec-test" },
          {"end": "30","start": "20","text": "20-30-sec-test" }
          /* ... and so on ... full json is in the demo */
        ];
    //createSubtitle();

    /*
    function createSubtitle()
    {
        var element;
        for (var i = 0; i < syncData.length; i++) {
            element = doc.createElement('span');
            element.setAttribute("id", "c_" + i);
            element.innerText = syncData[i].text + " ";
            subtitles.appendChild(element);
        }
    }*/

    videoElementYT.addEventListener("timeupdate", function(e){
        console.log("timeupdate")
        console.log(retrieveTime().timestamp);
        if (document.querySelector("div.ad-showing")) {
           //Ad is active as a video 
           console.log("this is an ad")
        }
        else {
            //Actual video is playing
            console.log("this is a video")

            syncData.forEach(function(element, index, array){
                if( retrieveTime().timestamp >= element.start && retrieveTime().timestamp <= element.end )
                    //subtitles.children[index].style.background = 'yellow';
                    console.log(element.text);
            });

        }
    });
}(window, document));

//retrieveTime()
//retrieveTime calls the # of seconds since the beginning of the video. This code is super messy :)

//Goal: use Video events such as ended, pause, play, playing, progress, seeked, seeking, stalled, suspend, waiting according to the Events page in this. This will make it easier as we don't need to use a loop, we can just load the JSON data and have it wait until the next timestamp to change the div elements. We also need to load the Line Distribution information and setup a backend + UI for all for all of this to be volunteer. We also need to figure out what the lyrics will look like on screen to be easy, legible, and understandible. 


//ad ideas?
//document.querySelector("#movie_player > div.ytp-paid-content-overlay")
//#movie_player > div.video-ads.ytp-ad-module
//#player-overlay\:a

//#player-overlay\:a > div.ytp-ad-player-overlay-progress-bar

//#player-overlay\:a

