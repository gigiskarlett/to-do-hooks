import React from "react";
import styled from "styled-components";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: "",
			list: [
				{ id: "5", value: "Buy groceries" },
				{ id: "4", value: "Buy groceries" },
				{ id: "3", value: "Buy groceries" },
			],
		};
	}

	addItem(e) {
		e.preventDefault();
		if (this.state.item !== "") {
			const newItem = {
				id: 1 + Math.random(),
				value: this.state.item.slice(),
			};

			let list = [...this.state.list];
			list.push(newItem);

			this.setState({ list, newItem, item: "" });
		}
	}

	updateItem(key, value) {
		this.setState({
			[key]: value,
		});
	}

	render() {
		let list = this.state.list.map((item, index) => {
			return (
				<ListItem key={item.id}>
					<TaskText>{item.value}</TaskText>
				</ListItem>
			);
		});
		return (
			<ToDoContainer>
				<ToDoList>
					<TodoHeader>
						<form onSubmit={(e) => this.addItem(e)}>
							<Input
								type="text"
								placeholder="Type here..."
								value={this.state.item}
								onChange={(e) => this.updateItem("item", e.target.value)}
							/>
							<Button>Input</Button>
						</form>
					</TodoHeader>
					<ListCont>{list}</ListCont>
				</ToDoList>
			</ToDoContainer>
		);
	}
}

const Input = styled.input.attrs({
	className:
		"mt-3 border-0 rounded w-4/5 text-xs h-8 p-1 border border-solid border-gray-400 placeholder-gray-500::placeholder text-gray-700",
})``;

const Button = styled.button.attrs({
	className: "border-0 rounded-lg ml-1 h-8 p-1  bg-white",
})``;

const ListCont = styled.div.attrs({
	className: "flex justify-center flex-col",
})``;

const ListItem = styled.li.attrs({
	className:
		"list-none py-5 justify-between items-center border-b border-solid border-gray-400 flex ",
})``;

const TaskText = styled.p.attrs({
	className: "text-xs m-0 max-w-xs pl-3",
})``;

const ToDoList = styled.div.attrs({
	className:
		"border border-gray-500 w-3/4 sm:w-1/2 lg:w-1/3 border-none text-center bg-white rounded overflow-hidden",
})``;

const ToDoContainer = styled.div.attrs({
	className: "bg-gray-200 h-full justify-center py-5 flex items-start",
})``;

const TodoHeader = styled.div.attrs({
	className: "py-5 bg-babyblue overflow-hidden",
})``;

export default App;
