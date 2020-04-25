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

const Input = styled.input`
  margin-top: 10px;
  border-width: 0;
  border-radius: 3px;
  width: 80%;
  font-size: 12px;
  height: 24px;
  padding: 4px;
  border: 1px solid gainsboro;
  color: #5f6769;
`;

const Button = styled.button`
  border-width: 0;
  border-radius: 3px;
  margin-left: 4px;
  height: 34px;
  padding: 4px;
  border: 1px solid gainsboro;
`;

const ListCont = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  display: flex;
`;

const TaskText = styled.p`
  font-size: 12px;
  margin: 0;
  max-width: 360px;
  padding-left: 10px;
`;

const ToDoList = styled.div.attrs({
  className: "border border-gray-500 w-3/4 sm:w-1/2 lg:w-1/3 sm:bg-blue-500",
})`
  text-align: center;
  background-color: white;
  border: 1px solid red;
  border-radius: 4px;
  overflow: hidden;
`;

const ToDoContainer = styled.div.attrs({
  className: "bg-gray-200 h-full",
})`
  justify-content: center;
  padding: 20px;
  display: flex;
  align-items: flex-start;
`;

const TodoHeader = styled.div`
  padding: 20px 0;
  background-color: #00bcd4;
  overflow: hidden;
`;

export default App;
