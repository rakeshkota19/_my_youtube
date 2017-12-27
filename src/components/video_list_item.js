import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const VideoList_item = (props) => {
    const vid = props.video;

    return (
        <li className={"list-group-item"} onClick={() => {
            props.onVideoSelect(vid)
        }}>
            <img className={"video-item img"} src={vid.snippet.thumbnails.default.url}/>

            {vid.snippet.title}
        </li>

    );
}
export default VideoList_item;