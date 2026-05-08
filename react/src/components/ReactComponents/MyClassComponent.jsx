import React, {Component} from 'react';

class MyClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:`Hello ${this.props.name}, Welcome to the world of React!`
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}


export default MyClassComponent;