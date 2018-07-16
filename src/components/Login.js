import React from 'react';

import { Button } from 'devextreme-react/ui/button';
import { ValidationGroup } from 'devextreme-react/ui/validation-group';
import { Validator } from 'devextreme-react/ui/validator';
import { TextBox } from 'devextreme-react/ui/text-box';

class Login  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            userLogin: null
        };
        this.validationRules = {
            login: [
                { type: 'email', message: 'Login is invalid.' },
                { type: 'required', message: 'Login is required.' }
            ],
            password: [
                { type: 'required', message: 'Password is required.' }
            ]
        };
    }

    loginClick(args) {
        if (!args.validationGroup.validate().isValid)
            return;

        this.props.onUserAuthorized(true);
        this.setState({ userLogin: args.login });
    };
    loginChange(e) {
        this.setState({ login: e.value });
    };
    passwordChange(e) {
        this.setState({ password :e.value });
    };

    render() {
        return (
            <ValidationGroup className='dx-fieldset'>
                <div className='dx-field'>
                    <TextBox value={this.state.login} placeholder='Login' onValueChanged={this.loginChange.bind(this)}>
                        <Validator validationRules={this.validationRules.login} />
                    </TextBox>
                </div>
                <div className='dx-field'>
                    <TextBox mode='password' value={this.state.password} placeholder='Password' onValueChanged={this.passwordChange.bind(this)}>
                        <Validator validationRules={this.validationRules.password} />
                    </TextBox>
                </div>
                <div className='dx-field'>
                    <Button style='float: right;' text='Login' onClick={this.loginClick.bind(this)}></Button>
                </div>
            </ValidationGroup>
        );
    }
}

export default Login;