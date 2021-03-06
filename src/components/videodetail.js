import React from 'react';

const VideoDetail = (props) => {
    if (!props.video) {
        return (
            <p>loading....</p>
        );
    }
    const url = 'https://www.youtube.com/embed/' + props.video.id.videoId;
    console.log("props" + props);
    return (
        <div>
            <div>
                <iframe allowFullScreen={"allowFullScreen"} src={url} width="700" height="400"/>
            </div>
            <div>
                <p>{props.video.snippet.title}</p>
            </div>
            <div>
                <p>{props.video.snippet.description}</p>
            </div>
        </div>
    );
}
export default VideoDetail;