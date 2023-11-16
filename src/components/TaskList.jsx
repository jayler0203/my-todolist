import React from 'react';
import Checkbox from "./Checkbox"
import { useState } from 'react';
const TaskList = ({ tasks, onDeleteTask, checkedTask,onToggleTask }) => {
return (
<ul>
{tasks.map((task, index) => (
<li key={index} >
  <Checkbox isChecked={checkedTask[index]} onChange={()=>onToggleTask(index)} ></Checkbox>
<p style={{textDecoration:checkedTask[index]?"line-through":"none"}}>{task}</p>
<button onClick={() => onDeleteTask(index)}>Delete</button>
</li>
))}
</ul>
);
};
export default TaskList;