import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [list, setList] = useState([{ id: "5", value: "Buy groceries" }]);
	const [item, setItem] = useState("");
	const [count, setCount] = useState(0);

	const addItem = () => {
		const newItem = {
			id: 1 + Math.random(),
			value: item.slice(),
		};

		setList([...list, newItem]);
		setItem("");
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="Type here..."
				value={item}
				onChange={(e) => setItem(e.target.value)}
			/>
			<button onClick={() => addItem()}>Input</button>
			<button onClick={() => setCount(count + 1)}>{count}</button>
			<ul>
				{list.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
