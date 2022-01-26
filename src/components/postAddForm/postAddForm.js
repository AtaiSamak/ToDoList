import React, {Component} from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap"

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeValue(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <InputGroup as="form" className="mb-3 mt-4" onSubmit={this.onSubmit}>
                <FormControl
                    aria-describedby="basic-addon1"
                    onChange={this.onChangeValue}
                    value={this.state.text}
                    placeholder="Что планируете на сегодня?"
                />
                <Button
                    type="submit"
                    variant="outline-dark"
                    id="button-addon1"
                >
                    Добавить
                </Button>
            </InputGroup>
        )
    }
}