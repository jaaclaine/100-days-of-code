import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './main';

var tasksList = ["pipip", "task 2"];

var tasks = localStorage.getItem('storedTasks');
if(tasks){
	tasksList = JSON.parse(tasks);
}

ReactDOM.render(
	<Todo tasks={tasksList} />,
	document.getElementById('root')
);

