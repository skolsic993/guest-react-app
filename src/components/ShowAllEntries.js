import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class ShowAllEntries extends React.Component {
    state={
        entries: [],
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api`)
        .then((res) => {
            this.setState({
                entries: res.data
            })
        });
    }

    render() {
        return(
            <div className="container main">
                <div className="app-wrapper">
                    <p className="title">Guest Book</p>
                    <Link to="/create" className="btn white-text waves-effect waves-blue create">Create New Entry</Link>
                    <div className="row">
                        <div className="col s8 offset-s2 m8 offset-m2 l6 offset-l3">
                            {this.state.entries.map((entry)=>
                            <div className="card animate bounceIn" key={entry.id}>
                                <Link to={`/edit/${entry.id}`} className="btn white black-text waves-effect waves-blue read-more">Read More</Link>
                                <div className="card-content">
                                    <span className="card-title grey-text text-darken-4"><i className="fas fa-user animate heartBeat"></i>{entry.username}</span>
                                    <p className="paragraph" columns="20">{entry.body.substring(0, 15)}...</p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowAllEntries;