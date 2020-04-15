import React, { useState } from "react";
import "./App.css";

function App() {
	const [list, setList] = useState([{ id: "5", value: "Buy groceries" }]);
	const [item, setItem] = useState("");

	const addItem = () => {
		const newItem = {
			id: 1 + Math.random(),
			value: item.slice(),
		};

		let newList = [...list];
		newList.push(newItem);
		setList(newList);
		setItem("");
	};

	const updateItem = (key, value) => {
		setItem(value);
	};

	return (
		<div className="App">
			<input
				type="text"
				placeholder="Type here..."
				value={item}
				onChange={(e) => updateItem("item", e.target.value)}
			/>
			<button onClick={() => addItem()}>Input</button>
			<ul>
				{list.map((item, index) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
