import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default class Formtask extends React.Component {

    state = {
        title: '',
        description: ''
    }

    handleSubmit = e => {   
        this.props.addTask(this.state.title, this.state.description);   
        e.preventDefault();
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render () {
        
        return (
            <Form className="mt-5" onSubmit={this.handleSubmit}>
                <Form.Group className="mx-auto" style={{width: 300}}>
                    <Form.Control name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                    <br />
                    <Form.Control name="description" as="textarea" rows="3" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
                    <br />
                    <Button type="submit" className="mx-auto" variant="secondary" style={{width: 70}} block>Save</Button>
                </Form.Group>
            </Form>
        )
    
    }

}