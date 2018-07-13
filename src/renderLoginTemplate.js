import React from 'react';

import { Button } from "devextreme-react/ui/button";
import { ValidationGroup } from "devextreme-react/ui/validation-group";
import { Validator } from "devextreme-react/ui/validator";
import { TextBox } from "devextreme-react/ui/text-box";

function renderLoginTemplate() {
    const validationRules = {
        login: [
            { type: "email", message: "Login is invalid." },
            { type: "required", message: "Login is required." }
        ],
        password: [
            { type: "required", message: "Password is required." }
        ]
    };

    return (
        <React.Fragment>
            <ValidationGroup className="dx-fieldset">
                <div className="dx-field">
                    <TextBox value={this.state.login} placeholder="Login" onValueChanged={this.loginChange}>
                        <Validator validationRules={validationRules.login} />
                    </TextBox>
                </div>
                <div className="dx-field">
                    <TextBox mode="password" value={this.state.password} placeholder="Password" onValueChanged={this.passwordChange}>
                        <Validator validationRules={validationRules.password} />
                    </TextBox>
                </div>
                <div className="dx-field">
                    <Button style="float: right;" text="Login" onClick={this.loginClick}></Button>
                </div>
            </ValidationGroup>
        </React.Fragment>
    );
}

export default renderLoginTemplate;