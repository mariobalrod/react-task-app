import React, {Component} from 'react';

import Tasks from './containers/Tasks';
import NavBar from './components/Navbar';
import Formtask from './components/Formtask';

import { Button } from 'react-bootstrap';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';

import tasks from './sample/tasks.json';

class App extends Component {

  state = {
    tasks: tasks,
    show: false
  }

  handleClick = () => {
    this.setState({ show: !this.state.show});
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
      done: false
    }
    this.setState ({
      tasks: [...this.state.tasks, newTask],
      show: false
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  }

  doTask = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done;
      }
      
      return task;
    });
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    let form = this.state.show ? <Formtask addTask={this.addTask}/> : '';
    return (
      <div>
        <NavBar/>
        <div className="container mb-5">
          <div className="mt-5 mx-auto px-0" style={{width: 70}}>
            <Button onClick={this.handleClick} variant="primary" block><PlaylistAddRoundedIcon/></Button>
          </div>
          {form}
          <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} doTask={this.doTask}/>
        </div>
      </div>
    )

  }

}

export default App;
