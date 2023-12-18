import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNamechange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDatechange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddbuttonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = '';
    dueDateElement.current.value = '';
    onNewItem(todoName, dueDate);

    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container">
      <form action="" className="row kg-row" onSubmit={handleAddbuttonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // onChange={handleNamechange}
            // value={todoName}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // onChange={handleDatechange}
            // value={dueDate}
          />
        </div>

        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
