import React from 'react';

import { Template } from "devextreme-react/core/template";

import { Toolbar } from "devextreme-react/ui/toolbar";
import { Popup } from "devextreme-react/ui/popup";

function Header() {
    const items = [{
        location: "after",
        locateInMenu: "auto",
        widget: "dxButton",
        visible: !this.state.isUserAuthorized,
        options: {
            icon: "user",
            text: "Login",
            onClick: onShowLoginPopup.bind(this)
        }
    }, {
        location: "after",
        locateInMenu: "auto",
        visible: this.state.isUserAuthorized,
        template: "imageTemplate"
    }];

    function onShowLoginPopup() {
        this.setState({ showLoginPopup: true });
    };

    return (
        <React.Fragment>
            <Toolbar items={items}>
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
                contentRender={() => <div>Login</div>}
                onHiding={() => { this.setState({ showLoginPopup: false }); }}
            ></Popup>
        </React.Fragment>
    );
}

export default Header;