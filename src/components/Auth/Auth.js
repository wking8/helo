import React, { Component } from 'react'

export default class Auth extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <span>Username:<input onChange={e => this.handleChange(e)} name='name' type="text" /></span>
                <span>Password:<input onChange={e => this.handleChange(e)} name='name' type="text" /></span>
            </div>
        )
    }
}