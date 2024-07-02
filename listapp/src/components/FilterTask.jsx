import React from 'react';

export const FilterTask = ({ selectedFilter, handleFilterChange }) => {
	return (
		<div className='filter-tasks'>
			<h3>
				<label>
					<input
						type="radio"
						name="filter"
						value="tasks"
						className='container-filter'
						checked={selectedFilter === 'tasks'}
						onChange={handleFilterChange}
					/>
					Tasks
				</label>
			</h3>
			<h3>
				<label>
					<input
						type="radio"
						name="filter"
						value="completed"
						className='container-filter'
						checked={selectedFilter === 'completed'}
						onChange={handleFilterChange}
					/>
					Completed
				</label>
			</h3>
			<h3>
				<label>
					<input
						type="radio"
						name="filter"
						value="pending"
						className='container-filter'
						checked={selectedFilter === 'pending'}
						onChange={handleFilterChange}
					/>
					Pending
				</label>
			</h3>
		</div>
	);
};
