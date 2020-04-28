import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditEntry extends React.Component {
    state={
        id: this.props.match.params.id,
        entry: [],
    }

    componentDidMount() {
        this.getEntry();
    }
    
    like = (num) => {
        axios.put(`http://127.0.0.1:8000/api/${this.state.id}`, {number_of_likes: num + 1})
        .then((res) => {
            this.getEntry();
        })
    }

    getEntry = () => {
        axios.get(`http://127.0.0.1:8000/api/${this.state.id}`)
        .then((res) => {
            this.setState({
                entry: res.data,
            })
        })
    }

    render() {
        return(
            <div className="container main">
                <div className="app-wrapper">
                    <p className="title">Guest Book</p>
                    <Link to="/" className="btn white-text waves-effect waves-blue create">Go Back</Link>
                    <div className="row">
                        <div className="col s8 offset-s2 m8 offset-m2 l6 offset-l3">
                            <div className="card height animate fadeIn">
                                <div className="card-content center">
                                    <button className="activator btn white-text waves-effect waves-blue">Click Me</button>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4 x"><i className="fas fa-times"></i></span>
                                    <p className="username">Username: <span className="span-user">{this.state.entry.username}</span></p>
                                    <p className="entry-p" columns="20">{this.state.entry.body}</p>
                                    <span className="likes"><i className="fas fa-thumbs-up" onClick={(e) => this.like(this.state.entry.number_of_likes)}></i>({this.state.entry.number_of_likes})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditEntry;