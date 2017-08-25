import React from 'react';

export class ToDoAppList extends React.Component {
	constructor() {
		super();
		this.remove = this.remove.bind(this);
	}

	remove(elem) {
		var value = elem.target.parentNode.querySelector('span').innerHTML;
		this.props.remove(value);
	}

	render() {
		var items = this.props.tasks.map((elem, i) => {
			return <li key={i}><span>{elem}</span> <button onClick={this.remove}>X</button></li>
		});
		return(
			<ul>
				{items}
			</ul>
		);
	}
}