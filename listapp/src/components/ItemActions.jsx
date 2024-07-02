import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { EditTaskItem } from './EditTaskItem';

export const ItemActions = ({
	task,
	handleEditTask,
	handleDeleteTask,
	handleCompleteTask
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTask(task.id)}>
				<label
					className={`container-done ${task.completed ? 'active' : ''}`}
				></label>
			</span>
			<EditTaskItem task={task} handleEditTask={handleEditTask} />
			<button
				className='delete-button'
				onClick={() => handleDeleteTask(task.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};