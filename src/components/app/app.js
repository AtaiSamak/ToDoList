import React, { Component } from "react";
import ErrorWindow from "../errorWindow";
import PostAddForm from "../postAddForm";
import PostTask from "../postTask";
import { Container, Row } from "react-bootstrap";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "I'm the king of the world!", id: 1}
            ]
        };
        this.currentIndex = 1;
    }
    
    addTask = (body) => {
        if(!body) {
            return
        }
        const newTask = {
            label: body,
            id: ++this.currentIndex
        }
        this.setState(({data}) => {
            const newData = [...data, newTask];
            return {
                data: newData
            }
        });
    }

    deleteTask = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(task => task.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newData = [...before, ...after]
            return {
                data: newData
            }
        });
    }

    removeLastTask = () => {
        this.setState(({data}) => {
            const newData = data.slice(0, data.length - 1);
            return {
                data: newData
            }
        })
    }

    render() {

        if(this.state.data.length > 10) {
            return (
                <ErrorWindow onRemoveLastTask={this.removeLastTask}/>
            )
        }

        return (
            <Container style={{maxWidth: '756px'}}>
                <Row>
                    <PostAddForm onAdd={this.addTask}/>
                </Row>
                <Row style={{paddingLeft: '12px'}}>
                    <PostTask
                        tasks={this.state.data}
                        onDelete={this.deleteTask}/>
                </Row>
            </Container>
        )
    }
}