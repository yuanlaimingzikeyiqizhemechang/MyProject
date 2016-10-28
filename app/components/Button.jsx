import React from 'react'
require(['../plugs/jquery-3.1.0.min.js'], function ($){
    // some code here
    console.log($().jquery)
});
var Button = React.createClass({
    handle(){

    },
    render() {
        return (
            <div>
                <button onClick={this.handle}>换字</button>
            </div>
        )
    }
});
export default Button