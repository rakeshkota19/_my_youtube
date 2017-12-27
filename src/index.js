

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Videolist from './components/video_list';
import YTSearch from 'youtube-api-search';
//default import,export read
const API_KEY = "AIzaSyD_UZQQV-OcpZyjL0ppWCLBGyFgqNpiytg";
import VideoDetail from './components/videodetail';

class App extends Component {
    constructor(props) {
        //this.onInputChane.bind(this);
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    }
//this  belongs to the calling function
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            console.log(videos);
            this.setState({videos: videos, selectedVideo: videos[0]});
            console.log(this);
        });

    }

    render() {
        return (
            <div>
                <SearchBar className="search-bar" onChangeSearchTerm={this.videoSearch.bind(this)}/>
                <div class="row">
                    <div className="col-md-8">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-md-4">
                        <Videolist videos={this.state.videos}
                                   onVideoSelect={(vid) => {
                                       this.setState({selectedVideo: vid})

                                   }}/>
                    </div>
                </div>

            </div>
        );
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'));