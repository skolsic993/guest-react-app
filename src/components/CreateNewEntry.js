import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class CreateNewEntry extends React.Component {
    state={
        id: 0,
        username: '',
        body: '',
    }

    usernamechange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    bodychange = (event) => {
        this.setState({
            body: event.target.value
        })
    }

    submit = (event, id) => {
        event.preventDefault();
        axios.post(`http://127.0.0.1:8000/api`, {username:this.state.username, body:this.state.body})
        .then((res) => {
            this.props.history.push('/');
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
                        <form onSubmit={(e) => this.submit(e, this.state.id)}>
                            <div className="input-field">
                                <label>Username</label>
                                <input type="text" className="validate" onChange={(e)=>this.usernamechange(e)} value={this.state.username} required />
                            </div>
                            <div className="input-field">
                                <label>Textarea</label>
                                <textarea type="text" className="materialize-textarea" data-length="120" onChange={(e)=>this.bodychange(e)} value={this.state.body} required />
                            </div>
                            <div className="center-align">
                                <button type="submit" className="waves-effect waves-light btn">Add</button>
                            </div>  
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateNewEntry;