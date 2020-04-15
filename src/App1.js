import React from "react";
import "./App.css";

class App1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: "",
			list: [{ id: "5", value: "Buy groceries" }],
		};
	}

	addItem() {
		const newItem = {
			id: 1 + Math.random(),
			value: this.state.item.slice(),
		};

		let list = [...this.state.list];
		list.push(newItem);

		this.setState({ list, newItem });
	}

	updateItem(key, value) {
		this.setState({
			[key]: value,
		});
	}

	render() {
		let list = this.state.list.map((item, index) => {
			return <li key={item.id}>{item.value}</li>;
		});
		console.log(this.state.list);
		return (
			<div className="App">
				<input
					type="text"
					placeholder="Type here..."
					value={this.state.item}
					onChange={(e) => this.updateItem("item", e.target.value)}
				/>
				<button onClick={() => this.addItem()}>Input</button>
				<ul>{list}</ul>
			</div>
		);
	}
}

export default App1;
