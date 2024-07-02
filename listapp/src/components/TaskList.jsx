import React from 'react';
import { ItemActions } from './ItemActions';

export const TaskList = ({
	tasks,
	handleEditTask,
	handleDeleteTask,
	handleCompleteTask
}) => {
	return (
		<ul>
			{tasks.map(task => (
				<ItemActions
					key={task.id}
					task={task}
					handleEditTask={handleEditTask}
					handleDeleteTask={handleDeleteTask}
					handleCompleteTask={handleCompleteTask}
				/>
			))}
		</ul>
	);
};