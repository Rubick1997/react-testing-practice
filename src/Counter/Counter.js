import React, { useState } from "react";
import "./Counter.css";

function Counter() {
	const [counterValue, setCounterValue] = useState(0);
	const [inputValue, setInputValue] = useState(1);

	const addToCounter = () => {
		setCounterValue(counterValue + inputValue);
	};

	const sutractFromCounter = () => {
		setCounterValue(counterValue - inputValue);
	};

	return (
		<div>
			<h1 data-testid='header'>My Counter</h1>
			<h1
				data-testid='counter'
				className={`${counterValue >= 100 ? "green" : ""}${
					counterValue <= -100 ? "red" : ""
				}`}>
				{counterValue}
			</h1>
			<button data-testid='subtract-btn' onClick={sutractFromCounter}>
				-
			</button>
			<input
				data-testid='input'
				type='number'
				value={inputValue}
				className='text-center'
				onChange={(e) => {
					setInputValue(+e.target.value);
				}}
			/>
			<button data-testid='add-btn' onClick={addToCounter}>
				+
			</button>
		</div>
	);
}

export default Counter;
