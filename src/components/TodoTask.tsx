import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task: ITask;
    completedTask(taskToDelete: string): void;
}

const TodoTask = ({ task, completedTask }: Props) => {
  return (
    
    <div className='task'>
        <div className='content'>
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={() => {completedTask(task.taskName)}}>Finished!</button>
    </div>
  )
}

export default TodoTask