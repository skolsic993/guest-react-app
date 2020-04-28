import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ShowAllEntries from './ShowAllEntries';
import CreateNewEntry from './CreateNewEntry';
import EditEntry from './EditEntry';
import Spinner from './Spinner';
import '../App.css';

class App extends React.Component {
    state={
        isLoading: true,
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    render() {
        if(this.state.isLoading === true) {
            return(
                <div>
                    <Spinner />
                </div>
            )
        }

        return(
            <div>
                <BrowserRouter>
                    <Route path="/" exact component={ShowAllEntries} />
                    <Route path="/create" exact component={CreateNewEntry} />
                    <Route path="/edit/:id" exact component={EditEntry} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;