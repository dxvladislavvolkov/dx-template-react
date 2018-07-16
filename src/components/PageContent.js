import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';

import Profile from '../views/Profile';
import Settings from '../views/Settings';
import About from '../views/About';

class PageContent extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Route path='/profile' component={Profile}></Route>
                <Route path='/settings' component={Settings}></Route>
                <Route path='/about' component={About}></Route>
            </div>
        );
    }
}

export default PageContent;