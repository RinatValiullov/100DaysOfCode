import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import store from './store';
import { observer } from 'mobx-react';

class App extends React.Component {
  render() {
    const { sortedTasks } = store;

    return (
      <div className="App">
        <h1 className="top">Active tasks: {store.activeTasksCount}</h1>
        {sortedTasks.map(task => (
          <Task
            doneTask={() => store.doneTask(task.id)}
            deleteTask={() => store.deleteTask(task.id)}
            task={task}
            key={task.id}
          ></Task>
        ))}
        <TaskInput addTask={v => store.addTask(v)}></TaskInput>
      </div>
    );
  }
}

export default observer(App);
