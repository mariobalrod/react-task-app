import React, {Component} from 'react';

import Task from '../components/Task';

class Tasks extends Component {

    render() {
        return (
            <div>
                {this.props.tasks.map((task) => <Task key={task.id} task={task} deleteTask={this.props.deleteTask} doTask={this.props.doTask}/>)}
            </div>
        )
    }

}
 
export default Tasks;
