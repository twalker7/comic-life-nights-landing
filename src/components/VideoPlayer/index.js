 import React from 'react';
 
import VideoPlayerobj from 'react-video-js-player';
import Clip from '../../assets/comicnight.3gp'
function VideoPlayer(){
    const videoSrc = Clip;
    return(
        <div>
            <VideoPlayerobj src={videoSrc} width="720" height="420" />
        </div>
    );
}


export default VideoPlayer;