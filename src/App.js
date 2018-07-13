import React, { Component } from 'react';
import './App.css';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

import { SlideOutView } from "devextreme-react/ui/slide-out-view";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";

import createHistory from "history/createBrowserHistory";

import Profile from './views/Profile';
import Settings from './views/Settings';
import About from './views/About';

const newHistory = createHistory(); 

function renderViewTemplate() {
    return (
        <React.Fragment>
            <Router history={newHistory}>
                <div>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/settings" component={Settings}></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </Router>
        </React.Fragment>
    );
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: true,
            isUserAuthorized: false,
            showLoginPopup: false,
            userLogin: null
        };
        this.clickOnMenuButton = this.clickOnMenuButton.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    render() {
        return (
        <div className="App">
            <SlideOutView class="slide-layout"
                swipeEnabled={true}
                menuVisible={this.state.menuVisible}
                menuRender={NavigationMenu.bind(this)}
                contentRender={Header.bind(this)}
                onOptionChanged={(args) => args.name === "menuVisible" && this.setState({ menuVisible: args.value })}
            ></SlideOutView>
        </div>
        );
    }
    clickOnMenuButton(value) {
        this.setState({ menuVisible: !value });
    }  
    showMenu() {
        this.clickOnMenuButton(this.state.menuVisible);
    }
    onItemSelectionChanged(event) {
        newHistory.push("/settings")
    }
}

export default App;
