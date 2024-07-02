export const Reducer = (initialState, action) => {
	switch (action.type) {
		case 'Add Task':
			return [...initialState, action.payload];

		case 'Delete Task':
			return initialState.filter(task => task.id !== action.payload);

		case 'Complete Task':
			return initialState.map(task => {
				if (task.id === action.payload) {
					return {
						...task,
						completed: !task.completed,
					};
				}

				return task;
			});

		case 'Edit Task':
			return initialState.map(task => {
				if (task.id === action.payload.id) {
					return {
						...task,
						taskName: action.payload.taskName,
					};
				}

				return task;
			});

		default:
			return initialState;
	}
};