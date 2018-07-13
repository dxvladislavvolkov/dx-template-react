import React, { Component } from 'react';
import './App.css';

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.compact.css";

import { SlideOutView } from "devextreme-react/ui/slide-out-view";

import renderMenuTemplate from "./renderMenuTemplate"
import renderViewTemplate from "./renderViewTemplate"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: true,
            isUserAuthorized: false,
            showLoginPopup: false,
            login: "",
            password: "",
            userLogin: null
        };
        this.clickOnMenuButton = this.clickOnMenuButton.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    render() {
        return (
        <div className="App">
            <SlideOutView class="slide-layout"
                swipeEnabled={true}
                menuVisible={this.state.menuVisible}
                menuRender={renderMenuTemplate.bind(this)}
                contentRender={renderViewTemplate.bind(this)}
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
        // navigation
    }
    
    loginClick(args) {
        if (!args.validationGroup.validate().isValid)
            return;

        this.setState({ userLogin: args.login });
        this.setState({ showLoginPopup: false });
        this.setState({ isUserAuthorized: true });
    }
    loginChange(e) {
        this.setState({ login: e.value });
    }
    passwordChange(e) {
        this.setState({ password :e.value });
    }
}

export default App;
