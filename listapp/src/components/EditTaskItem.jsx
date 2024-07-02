import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const EditTaskItem = ({ task, handleEditTask }) => {
	const { editNameTask, onInputChange } = useForm({
		editNameTask: task.taskName,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = task.id;
		const taskName = editNameTask;

		handleEditTask(id, taskName);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`input-update ${
					task.completed ? 'text-decoration-dashed' : ''
				}`}
				name='editNameTask'
				value={editNameTask}
				onChange={onInputChange}
				placeholder=''
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='edit-button' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};