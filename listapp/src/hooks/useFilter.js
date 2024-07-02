import { useState } from 'react';

export const useFilter = (initialFilter = 'tasks', tasks) => {
	const [selectedFilter, setSelectedFilter] = useState(initialFilter);

	const handleFilterChange = (event) => {
		setSelectedFilter(event.target.value);
	};

	const filteredTasks = tasks.filter((task) => {
		if (selectedFilter === 'tasks') {
			return true; 
		} else if (selectedFilter === 'completed') {
			return task.completed;
		} else if (selectedFilter === 'pending') {
			return !task.completed; 
		}
		return true;
	});

	return {
		selectedFilter,
		handleFilterChange,
		filteredTasks,
	};
};
