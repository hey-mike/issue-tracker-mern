import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Header from '../components/Header.jsx';
import Routes from './Routes.jsx';


// withRouter IssueList can use this.props.router to access the router object.(this.props.location)
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                </div>
                <Routes />
            </div>
        );
    }
}

