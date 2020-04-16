import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';

const Task = (props) => {
    const spaces = {
        width:300,
        marginTop: 50,
        textDecoration: props.task.done ? 'line-through' : 'none'
    }
    const { title, description, id } = props.task;
    return (
        <Card style={spaces} className="mx-auto textCards">
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text className="mb-5">{description}</Card.Text>
                <Nav className="justify-content-center">
                    <div className="mx-2" style={{width: 50}}>
                        <Button onClick={props.deleteTask.bind(this, id)} variant="danger" block><DeleteForeverRoundedIcon/></Button>
                    </div>
                    <div className="mx-2" style={{width: 50}}>
                        <Button onClick={props.doTask.bind(this, id)} variant="success" block><PlaylistAddCheckRoundedIcon/></Button>
                    </div>
                </Nav>
            </Card.Body>
        </Card>
    )
} 

export default Task;
