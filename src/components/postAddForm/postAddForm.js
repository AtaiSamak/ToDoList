import React, {Component} from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    margin-top: 40px;
`;

const Input = styled.input`
    &[type="text" ] {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        margin: 0;
    }

    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 20px;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
    z-index: 2;

    &::placeholder {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 12px;

        letter-spacing: 0.5px;
        text-transform: uppercase;
    }

    &:focus {
        color: #212529;
        background-color: #fff;
        border-color: #bdbdbd;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
`;

const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: #eee;
    border: none;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color .15s ease-in-out;

    position: relative;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left-width: 0;

    &:hover {
        background-color: #bdbdbd;
    }
`;

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
            <Form onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    placeholder="Что планируете на сегодня?"
                    onChange={this.onChangeValue}
                    value={this.state.text}
                />
                <Button type="submit">Добавить</Button>
            </Form>
        )
    }
}