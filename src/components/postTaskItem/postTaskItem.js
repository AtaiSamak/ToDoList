import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Task = styled.div`

    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

    & span {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 12px;

        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin: 20px;
    }

    & div {
        display: flex;
        align-items: center;
        padding: 0 20px;
    }
`;

const BtnIcon = styled.button`
    border: none;
    background-color: inherit;

    & svg {
        font-size: 20px;
        color: #bdbdbd;

        transition: color .15s ease-in-out;
        &:hover {
            color: red;
            cursor: pointer;
        }
    }
`;

export default class PostTaskItem extends Component {
    render() {
        const {label, handleClick} = this.props;

        return (
            <Task>
                <span>{label}</span>
                <div>
                    <BtnIcon onClick={handleClick}>
                        <FontAwesomeIcon icon={faTrash} />
                    </BtnIcon>
                </div>
            </Task>
        )
    }
}