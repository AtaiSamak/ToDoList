import React from "react";
import { Component } from "react/cjs/react.production.min";
import { Modal } from "react-bootstrap"

export default class ErrorWindow extends Component {
    render() {
        const {onRemoveLastTask} = this.props;

        return (
            <Modal.Dialog>
                <Modal.Header closeButton onClick={() => onRemoveLastTask()}>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>You can only create 10 tasks :(</p>
                </Modal.Body>
            </Modal.Dialog>
        )
    }
}