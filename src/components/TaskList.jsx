import React from 'react';
import Checkbox from "./Checkbox"
import { useState } from 'react';
const TaskList = ({ tasks, onDeleteTask }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const handlecheck =(index)=>{
      const updatedCheckedItems = [...checkedItems];
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      setCheckedItems(updatedCheckedItems);

  }
return (
<ul>
{tasks.map((task, index) => (
<li key={index} >
  {console.log(checkedItems[index])}
  <Checkbox isChecked={checkedItems[index]?checkedItems[index]:false} onChange={()=>handlecheck(index)} ></Checkbox>
<p style={{textDecoration:checkedItems[index]?"line-through":"none"}}>{task}</p>
<button onClick={() => onDeleteTask(index)}>Delete</button>
</li>
))}
</ul>
);
};
export default TaskList;