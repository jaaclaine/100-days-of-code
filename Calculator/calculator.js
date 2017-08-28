import React from 'react';



export class Calculator extends React.Component {

	state = {
		value: null,
		displayValue: '0',
		waitingForOperand: false,
		operator: null
	}

	clearDisplay(){
		this.setState({
			displayValue: '0'
		})
	}

	inputDigit(digit) {
		const { displayValue, waitingForOperand } = this.state;

		if(waitingForOperand){
			this.setState({
				displayValue: String(digit),
				waitingForOperand: false
			})	
		} else{
			this.setState({
				displayValue: displayValue === '0' ? String(digit) : displayValue + digit
			})
		}
	}

	inputDot() {
		const { displayValue, waitingForOperand } = this.state;

		if(waitingForOperand){
			this.setState({
				displayValue: '.',
				waitingForOperand: false
			})	
		} else if(displayValue.indexOf('.') === -1){
			this.setState({
				displayValue: displayValue + '.',
				waitingForOperand: false
			})
		}

	}

	toggleSign() {
		const { displayValue } = this.state;

		this.setState({
			displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
		})
	}

	inputPercent() {
		const { displayValue } = this.state;
		const value = parseFloat(displayValue);

		this.setState({
			displayValue: String(value / 100)
		})
	}

	perfomOperation(nextOperator) {
		const { displayValue, operator, value } = this.state;

		const newValue = parseFloat(displayValue);

		const operations = {
			'/': (prevValue, nextValue) => prevValue / nextValue,
			'*': (prevValue, nextValue) => prevValue * nextValue,
			'+': (prevValue, nextValue) => prevValue + nextValue,
			'-': (prevValue, nextValue) => prevValue - nextValue,
			'=': (prevValue, nextValue) => nextValue
		}

		if(value == null) {
			this.setState({
				value: newValue
			})
		} else if(operator){
			const currentValue = value || 0;
			const computedValue = operations[operator](currentValue, newValue);

			this.setState({
				value: computedValue,
				displayValue: String(computedValue)
			})
		}

		this.setState({
			waitingForOperand: true,
			operator: nextOperator
		})
		
	}

	render() {
		const { displayValue } = this.state;

		return(
			<div>
			<div> { displayValue } </div>
				<button className="" onClick={() => this.clearDisplay() } >AC</button>
				<button className="" onClick={() => this.perfomOperation('+') } >+</button>
				<button className="" onClick={() => this.perfomOperation('-') } >-</button>
				<button className="" onClick={() => this.perfomOperation('*') } >*</button>
				<button className="" onClick={() => this.perfomOperation('/') } >/</button>
				<button className="" onClick={() => this.perfomOperation('=') } >=</button>
				<button className="" onClick={() => this.inputPercent() } >%</button>
				<button className="" onClick={() => this.toggleSign() } >+-</button>
				<button className="" onClick={() => this.inputDot() } >.</button> <br />	
				<button className="" onClick={() => this.inputDigit(0) } >0</button>
				<button className="" onClick={() => this.inputDigit(1) } >1</button>
				<button className="" onClick={() => this.inputDigit(2) } >2</button>
				<button className="" onClick={() => this.inputDigit(3) } >3</button>
				<button className="" onClick={() => this.inputDigit(4) } >4</button>
				<button className="" onClick={() => this.inputDigit(5) } >5</button>
				<button className="" onClick={() => this.inputDigit(6) } >6</button>
				<button className="" onClick={() => this.inputDigit(7) } >7</button>
				<button className="" onClick={() => this.inputDigit(8) } >8</button>
				<button className="" onClick={() => this.inputDigit(9) } >9</button>
			</div>
		);
	}
}