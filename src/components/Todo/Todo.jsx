import { useDispatch } from 'react-redux';
import Text from '../Text/Text';
import style from './Todo.module.css';

import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';
import { currentTodo, deleteTodo } from '../../redux/todosSlice';
const Todo = ({ id, counter, text, todo }) => {
  const dispatch = useDispatch();
  const handleDelete = todoId => {
    dispatch(deleteTodo(todoId));
  };
  const handleEdit = todoId => {
    dispatch(currentTodo(todoId));
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>

      <Text>{text}</Text>
      <button
        onClick={() => handleDelete(id)}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        onClick={() => handleEdit(todo)}
        className={style.editButton}
        type="button"
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
