import React, { FC, ChangeEvent, useState } from 'react';
import { ITask } from './Interfaces';
import './App.css';

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => { // the void keyword means that the function doesn't return anything
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value)); // The Number keyword converts this to a number so it can be recieved by the deadline variable
    }  
  }

  const addTask = (): void => {
    const newTask= { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  }


  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type="text" placeholder="Task..." name='task' onChange={handleChange} />
          <input type="number" name='deadline' placeholder="Days to complete..." />
        </div>
          <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>

      </div>
    </div>
  );
}

export default App;
