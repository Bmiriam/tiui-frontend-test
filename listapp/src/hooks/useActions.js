import { useEffect, useReducer } from 'react';
import { Reducer } from '../Reducer';

export const useActions = () => {
	const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('tasks')) || []
    }

	const [tasks, dispatch] = useReducer(
		Reducer,
		initialState,
		init
	);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


	const handleNewTask = task => {
		const action = {
			type: 'Add Task',
			payload: task,
		};

		dispatch(action);
	};

	const handleEditTask = (id, taskName) => {
		const action = {
			type: 'Edit Task',
			payload: {
				id,
				taskName,
			},
		};

		dispatch(action);
	};

	const handleDeleteTask = id => {
		const action = {
			type: 'Delete Task',
			payload: id,
		};

		dispatch(action);
	};

	const handleCompleteTask = id => {
		const action = {
			type: 'Complete Task',
			payload: id,
		};

		dispatch(action);
	};

    return{
        tasks,
        handleNewTask,
		handleEditTask,
        handleDeleteTask,
        handleCompleteTask
    }
};
