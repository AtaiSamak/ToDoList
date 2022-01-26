import React, { Component } from "react";
import PostTaskItem from "../postTaskItem";
import { ListGroup } from "react-bootstrap";

export default class PostTask extends Component {
    render() {
        const {onDelete, tasks} = this.props;
        const elements = tasks.map((task) => {
            const {id, label} = task;

            return (
                <ListGroup.Item
                    as="li" 
                    className="d-flex justify-content-between text-wrap
                    align-items-center mt-2 rounded-2 border"
                    key={id}
                    style={{listStyleType: 'none'}}>
                    <PostTaskItem
                        label={label}
                        handleClick={() => onDelete(id)}/>
                </ListGroup.Item>
            )
        });

        return (
            <ListGroup as="ol">
                {elements}
            </ListGroup>
        )
    }
}