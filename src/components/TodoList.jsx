import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo/TodoSlize";
import { Button } from "@mui/material";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import CancelIcon from "@mui/icons-material/Cancel";

export const TodoList = () => {
  const dispatsh = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const [todoId, setTodoId] = useState([null]);
  const [todoTitle, setTodoTitle] = useState("");

  const deleteHandler = (id) => {
    dispatsh(todoActions.removeTodo(id));
  };
  const toggletTodo = (id) => {
    dispatsh(todoActions.compelteTodo(id));
  };

  const editTodoHandler = ({ id, title }) => {
    setTodoId(id);
    setTodoTitle(title);
  };
  const saveHandler = (id) => {
    dispatsh(todoActions.editTodo({ id, todoTitle }));
    setTodoId(null);
    setTodoTitle("");
  };

  return (
    <>
      {todos.map((item) =>
        item.id === todoId ? (
          <>
            <input
              type="text"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
            <Button
              onClick={() => setTodoId(null)}
              variant="outlined"
              startIcon={<CancelIcon />}
            >
              Cacel
            </Button>

            <Button
              onClick={() => saveHandler(item.id)}
              variant="outlined"
              startIcon={<DataSaverOnIcon />}
            >
              Save
            </Button>
          </>
        ) : (
          <div key={item.id}>
            <p style={{ textDecoration: item.completed ? "line-through" : "" }}>
              {" "}
              {item.title}
            </p>

            <Button
              onClick={() => deleteHandler(item.id)}
              variant="outlined"
              startIcon={<RestoreFromTrashIcon />}
            >
              Delete
            </Button>
            <Button
              onClick={() => toggletTodo(item.id)}
              variant="outlined"
              startIcon={<AddTaskIcon />}
            >
              compuleted
            </Button>
            <Button
              onClick={() =>
                editTodoHandler({ id: item.id, title: item.title })
              }
              variant="outlined"
              startIcon={<AddTaskIcon />}
            >
              edit
            </Button>
          </div>
        )
      )}
    </>
  );
};
export default TodoList;
