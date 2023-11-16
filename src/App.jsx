import React, { useState } from 'react';
import Container from './components/Container';
import FormTodo from './components/FormTodo';
import TaskList from './components/TaskList';
function App() {
const [tasks, setTasks] = useState([]);
const [checkedTasks, setCheckedTasks] = useState([]);
const addTask = (task) => {
setTasks([...tasks, task]);
setCheckedTasks([...checkedTasks, false])
};
const deleteTask = (index) => {
const updatedTasks = tasks.filter((_, i) => i !== index);
setTasks(updatedTasks);
};
const toggleTask =(index)=>{
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = !updatedCheckedTasks[index];
    setCheckedTasks(updatedCheckedTasks);
}
return (
<div>
<Container>
<h1>To-Do List</h1>
<FormTodo onAddTask={addTask} />
<TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} checkedTask={checkedTasks}/>
</Container>
</div>
);
}
export default App;