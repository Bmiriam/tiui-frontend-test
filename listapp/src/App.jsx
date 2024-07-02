import './App.css';
import { TaskList } from './components/TaskList';
import { FilterTask } from './components/FilterTask';
import { AddTaskItem } from './components/AddTaskItem';
import { useActions } from './hooks/useActions';
import { useFilter } from './hooks/useFilter';

function App() {
	const { tasks, handleNewTask, handleEditTask, handleDeleteTask, handleCompleteTask } = useActions();
	const { selectedFilter, handleFilterChange, filteredTasks } = useFilter('tasks', tasks);

	return (
		<div className='container-list'>
			<h1>List</h1>
			<FilterTask 
				selectedFilter={selectedFilter}
				handleFilterChange={handleFilterChange}
			/>
			<div className='addTask'>
				<AddTaskItem handleNewTask={handleNewTask} />
			</div>
			<TaskList
				tasks={filteredTasks}
				handleEditTask={handleEditTask}
				handleDeleteTask={handleDeleteTask}
				handleCompleteTask={handleCompleteTask}
			/>
		</div>
	);
}

export default App;
