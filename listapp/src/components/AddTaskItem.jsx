import React from 'react';
import { useForm } from '../hooks/useForm';
import { FaPlus } from "react-icons/fa6";

export const AddTaskItem = ({ handleNewTask }) => {
	const { taskName, onInputChange, onResetForm } = useForm({
		taskName: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (taskName.length <= 1) return;

		let newTask = {
			id: new Date().getTime(),
			taskName: taskName,
			completed: false,
		};

		handleNewTask(newTask);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='taskName'
				value={taskName}
				onChange={onInputChange}
				placeholder='Add task'
			/>
			<button className='add-button' type='submit'><FaPlus /></button>
		</form>
	);
};