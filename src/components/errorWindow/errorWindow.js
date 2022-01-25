import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Component } from "react/cjs/react.production.min";

const Modal = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-y: scroll;
    padding: 60px 15px;
    text-align: center;
`;

const ModalContent = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 50px;
    background: #f9f9f9;
    border-radius: 3px;
    position: relative;
    box-shadow: 0 5px 15px black;

    & button {
        background: #ff0000;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        background: none;
        cursor: pointer;
        transition: 0.3s;
        outline: none;
    }
    
    & button:hover {
        transition: 0.3s;
        transform: rotate(180deg);
    }
    
    &h1 {
        font-size: 1.8rem;
        text-transform: uppercase;
        margin: 0 0 15px;
    }
    
    p {
        font-size: 1.125rem;
    }
`;

export default class ErrorWindow extends Component {
    render() {
        const {onRemoveLastTask} = this.props;

        return (
            <Modal>
                <ModalContent>
                    <button onClick={() => onRemoveLastTask()}>
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </button>
                    <h1>Error</h1>
                    <p>You can only create 10 tasks :(</p>
                </ModalContent>
            </Modal>
        )
    }
}