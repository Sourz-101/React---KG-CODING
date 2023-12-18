import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
    
  //   [
  //   {
  //     name: "buy butter",
  //     dueDate: "2023-12-12",
  //   },
  //   {
  //     name: "buy tomato",
  //     dueDate: "2023-12-12",
  //   },
  //   {
  //     name: "buy gas",
  //     dueDate: "2023-12-12",
  //   },
  // ]);

  // const handleNewItem = (itemName, itemDueDate) => {
  //   const newTodoItems = [
  //     ...todoItems,
  //     {
  //       name: itemName,
  //       dueDate: itemDueDate,
  //     },
  //   ];
  //   setTodoItems(newTodoItems);
  // };

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [ ...currValue, {name: itemName, dueDate: itemDueDate,}])
  }


  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </>
  );
}

export default App;
