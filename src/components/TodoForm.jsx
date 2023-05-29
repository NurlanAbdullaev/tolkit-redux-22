import { Button, Input, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo/TodoSlize";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputChangetHandler = (e) => {
    setInput(e.target.value);
  };

  const AddTodo = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: input,
    };
    dispatch(todoActions.AddTodo(data));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={AddTodo}>
        <StyleInput
          type="text"
          size="small"
          value={input}
          onChange={inputChangetHandler}
        />
        <StyledButton variant="outlined" type="submit" disabled={!input}>
          Add
        </StyledButton>
      </form>
    </div>
  );
};
export default TodoForm;
const StyledButton = styled(Button)(() => ({
  backgroundColor: "aqua",
}));

const StyleInput = styled(Input)(() => ({}));
