import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from "./Header";

import Profile from '../views/Profile';
import Settings from '../views/Settings';
import About from '../views/About';

class PageContent  extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Route path="/profile" component={Profile}></Route>
                <Route path="/settings" component={Settings}></Route>
                <Route path="/about" component={About}></Route>
            </React.Fragment>
        );
    }
}

export default PageContent;