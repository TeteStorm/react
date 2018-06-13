import React, { Component } from 'react'

class Translate extends Component {
    constructor(props) {
        super(props)


        this.state = {
            text_to_translate: '',
            text_translated: '',
        }

        this.handleChangeTranslated = this.handleChangeTranslated.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChangeTranslated(e) {
        return this.setState({
            text_to_translate: e.target.value
        })
    }

    handleClick(e) {
        fetch('http://localhost:9000/translate', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: this.state.text_to_translate,
                to: 'en'
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.text)
            this.setState({
                text_to_translate : data.text
            })
        })
    
    }

    render() {
        return (
            <div>
                <input type="test" name="text_to_translate" onChange={this.handleChangeTranslated} />
                <button type="button" onClick={this.handleClick}>Translate</button>
                <hr />
                <p>{this.state.text_translated}</p>
            </div>
        )

    }
}

export default Translate
