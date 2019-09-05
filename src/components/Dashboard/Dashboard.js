import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { setUser } from '../../ducks/reducer'
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
            userpost: true,
            posts: []
        };
    }
    componentDidMount() {
        this.getPosts();
    }
    getPosts = () => {
        const { search, userpost } = this.state;
        axios.get(`/api/posts?userposts=${userpost}&search=${search}`)
            .then(res => {
                this.setState({
                    posts: res.data
                });
            });
    };
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        this.setState({
            userpost: true ? false : true
        });
    }
    search = () => {
        this.getPosts();
    };
    reset = () => {
        this.setState({ search: "", userpost: true });
        this.getPosts();
    };
    render() {
        console.log(this.state.posts)
        return (
            <div>
                <input
                    onChange={e => this.handleChange(e)}
                    name='search'
                    type="text"
                />
                <button
                    onClick={this.search}>
                    Search
                </button>
                <button
                    onClick={this.reset}>
                    Reset
                </button>
                <label>
                    My Posts:
                    <input
                        defaultChecked={true}
                        onChange={() => this.handleClick()}
                        name="myPosts"
                        type="checkbox" />
                </label>
                <Link to='/new'>
                    <button>New Post</button>
                </Link>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <h3>{post.username}</h3>
                            <h3>{post.title}</h3>
                            <img src={post.profile_pic} alt="Pic" />
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(null, { setUser })(Dashboard)