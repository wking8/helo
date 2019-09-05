import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
    render() {
        return (
            <div>
                <img src={this.props.profile_pic} alt="Pic" />
                <h1>{this.props.username}</h1>
                <Link to='/dashboard'>
                    <button>Home</button>
                </Link>
                <Link to='/'>
                    <button>Logout</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { username, profile_pic } = reduxState
    return { username, profile_pic }
}

export default connect(mapStateToProps)(Nav)