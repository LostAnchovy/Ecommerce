import React, { Component } from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Col, Button, Checkbox } from 'react-bootstrap';

// https://react-bootstrap.github.io/components/forms/
class Login extends Component {
    state = {
        email: '',
        password: ''
    };
    getEmailValidationState = () => {
        const length = this.state.email.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    getPasswordValidationState = () => {
        const length = this.state.password.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }
    render() {
        return (
            <Form horizontal className="container">
                <FormGroup 
                    controlId="email"
                    validationState={this.getEmailValidationState}>
                    <Col componentClass={ControlLabel} sm={2}> Email: </Col>
                    <Col sm={10}>
                        <FormControl 
                            type="email" 
                            value={this.state.email}
                            placeholder="Enter Email"
                            onChange={this.handleEmailChange} />
                        <FormControl.Feedback />
                    </Col>
                </FormGroup>

                <FormGroup 
                    controlId="password"
                    validationState={this.getPasswordValidationState}>
                    <Col componentClass={ControlLabel} sm={2}> Password: </Col>
                    <Col sm={10}>
                        <FormControl 
                            type="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            placeholder="Enter Password" />
                        <FormControl.Feedback />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                         <Checkbox> Remember me</Checkbox>
                     </Col>
                 </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;
