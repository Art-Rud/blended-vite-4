import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentTodo,
  editTodo,
  selectCurentTodo,
} from '../../redux/todosSlice';
import { useEffect, useState } from 'react';

const EditForm = () => {
  const todos = useSelector(state => state.todos.items);
  const [text, SetText] = useState('');
  const todoToEdit = useSelector(selectCurentTodo);
  const dispatch = useDispatch();

  useEffect(() => {
    todoToEdit && SetText(todoToEdit.text);
  }, [todoToEdit]);
  const handleSave = event => {
    todoToEdit && dispatch(editTodo(event.target.elements.text.value));
    event.preventDefault();
    console.log(todoToEdit);
    dispatch(currentTodo(null));
  };

  const handleCancel = () => {
    dispatch(currentTodo(null));
  };
  return (
    <form className={style.form} onSubmit={handleSave}>
      <input
        className={style.input}
        placeholder=""
        name="text"
        required
        defaultValue={todoToEdit ? text : ''}
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={handleCancel} className={style.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
