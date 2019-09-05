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
        // console.log(this.state)
    }
    registerUser = () => {
        const {
            username,
            password
        } = this.state
        axios.post('/auth/register', { username, password })
            .then(res => {
                console.log(res.data[0].profile_pic)
                const { profile_pic } = res.data[0]
                this.props.setUser({ username, profile_pic })
                this.props.history.push('/dashboard')
            })
            .catch(err => {
                alert(err, 'Email already in use. Please login or register a new account.')
            })
    }
    login = () => {
        console.log('hi')
        const {
            username,
            password
        } = this.state
        axios.post(`/auth/login`, { username, password })
            .then(res => {
                console.log(res.data)
                const { id, username, profile_pic } = res.data.user
                this.props.setUser({ id, username, profile_pic })
                this.props.history.push(`/dashboard`)
            })
            .catch(err => {
                alert(err, 'No password associated. Please try again or register.')
            })
    }
    render() {
        return (
            <div>
                <span>Username:<input onChange={e => this.handleChange(e)} name='username' type="text" /></span>
                <span>Password:<input onChange={e => this.handleChange(e)} name='password' type="text" /></span>
                <button onClick={this.login}>LOGIN</button>
                <button onClick={this.registerUser}>REGISTER</button>
            </div>
        )
    }
}

export default connect(
    null,
    { setUser }
)(Auth)