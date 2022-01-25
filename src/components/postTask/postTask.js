import React, { Component } from "react";
import styled from "styled-components";
import PostTaskItem from "../postTaskItem";

const StyledPostTask = styled.div`
    margin-top: 20px;
`;

export default class PostTask extends Component {
    render() {
        const {onDelete, tasks} = this.props;
        const elements = tasks.map((task) => {
            const {id, label} = task;

            return (
                <li key={id} style={{listStyleType: 'none'}}>
                    <PostTaskItem
                        label={label}
                        handleClick={() => onDelete(id)}/>
                </li>
            )
        });

        return (
            <StyledPostTask>
                {elements}
            </StyledPostTask>
        )
    }
}