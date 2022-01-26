import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

export default class PostTaskItem extends Component {
    render() {
        const {label, handleClick} = this.props;

        return (
            <>
                <span className="text-wrap text-break" style={{paddingRight: '16px'}}>{label}</span>
                <Button variant="danger" onClick={handleClick}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                
            </>
        )
    }
}