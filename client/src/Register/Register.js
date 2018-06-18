import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button, Radio } from 'react-bootstrap';

// https://react-bootstrap.github.io/components/forms/
class Register extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    fieldGroup({ id, label, help, ...props }) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }

    render() {
        return (
            <form class="container">
                <this.fieldGroup
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Enter text"
                />
                <this.fieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"
                />
                <this.fieldGroup id="formControlsPassword" label="Password" type="password" />
                <this.fieldGroup
                    id="formControlsFile"
                    type="file"
                    label="File"
                    help="Example block-level help text here."
                />

                <Checkbox checked readOnly>
                    Checkbox
          </Checkbox>
                <Radio checked readOnly>
                    Radio
          </Radio>

                <FormGroup>
                    <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox>{' '}
                    <Checkbox inline>3</Checkbox>
                </FormGroup>
                <FormGroup>
                    <Radio name="radioGroup" inline>
                        1
            </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        2
            </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        3
            </Radio>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        <option value="other">...</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Multiple select</ControlLabel>
                    <FormControl componentClass="select" multiple>
                        <option value="select">select (multiple)</option>
                        <option value="other">...</option>
                    </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Static text</ControlLabel>
                    <FormControl.Static>email@example.com</FormControl.Static>
                </FormGroup>

                <Button type="submit">Submit</Button>
            </form>
        );
    }
}

export default Register;
