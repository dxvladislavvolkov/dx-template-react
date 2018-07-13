import React, { Component } from 'react';

import { Template } from "devextreme-react/core/template";

import { Toolbar } from "devextreme-react/ui/toolbar";
import { Popup } from "devextreme-react/ui/popup";

import Login from "./Login"

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserAuthorized: false,
            showLoginPopup: false,
            userLogin: null
        };
        this.items = [{
            location: "after",
            locateInMenu: "auto",
            widget: "dxButton",
            visible: !this.state.isUserAuthorized,
            options: {
                icon: "user",
                text: "Login",
                onClick: this.onShowLoginPopup.bind(this)
            }
        }, {
            location: "after",
            locateInMenu: "auto",
            visible: this.state.isUserAuthorized,
            template: "imageTemplate"
        }];
    }

    onShowLoginPopup() {
        this.setState({ showLoginPopup: true });
    }

    onUserAuthorized(value) {
        this.setState({ isUserAuthorized: value});
        this.setState({ showLoginPopup: false });
    }

    render() {
        return (
            <div>
                <Toolbar items={this.items}>
                    <Template name="imageTemplate" 
                        render={() => {
                            return(
                                <div>
                                    <div className="image-container">
                                        <img className="user-image" src="https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png"/>
                                    </div>
                                    {this.userLogin}
                                </div>
                            );
                        }}
                    />
                </Toolbar>
                <Popup
                    visible={this.state.showLoginPopup}
                    title="Login"
                    height="auto"
                    width="300"
                    contentRender={() => <Login onUserAuthorized={this.onUserAuthorized.bind(this)} />}
                    onHiding={() => { this.setState({ showLoginPopup: false }); }}
                ></Popup>
            </div>
        );
    }
}

export default Header;