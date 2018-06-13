import React, { Component } from 'react';
import StateInput from './StateInput'

class HelloWorld extends Component {
    constructor(props) {
        super(props)
        console.log(props, this.props)
        this.state = {
            name: 'Tania',
            txt : this.props.txt
        }
    }
    render() {
        const result = 4
        const style = {
            color: '#ff0005',
            fontSize: 50,
            backgroundColor: '#00ff55',
        }
        return (
            <div className="my-class-from-react">

                <h1>{this.state.txt}</h1>
                <h4 style={style}>{result === 2 * 2 ? <div><ul><li>true</li></ul></div> : 'false'}</h4>
                <span>{this.state.name}</span>
                <StateInput />
            </div>
        )
    }

}

export default HelloWorld