import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'


class Auth extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    registerUser = () => {
        const {
            usernameInput: username,    
            passwordInput: password
        } = this.state
        axios.post('/auth/register', { username, password })
            .then(res => {
                this.props.setUser({ username, password })
                this.props.history.push('/dashboard')
            })
    }
    render() {
        return (
            <div>
                <span>Username:<input onChange={e => this.handleChange(e)} name='username' type="text" /></span>
                <span>Password:<input onChange={e => this.handleChange(e)} name='password' type="text" /></span>
                <button>LOGIN</button>
                <button onClick={this.registerUser}>REGISTER</button>
            </div>
        )
    }
}

export default connect(
    null,
    { setUser }
)(Auth)