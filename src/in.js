import React, {Component} from 'react';
import ReactDOM from "react-domn"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }}
    onInputchange() {
        console.log("hello");
        this.setState({term:"hello"});
    }

    render() {
        return (

            <button
                onClick={ this.onInputchange}/>
        );
    }
}
