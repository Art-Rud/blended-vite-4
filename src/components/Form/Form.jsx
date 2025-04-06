import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';
import { nanoid } from 'nanoid';
import { filterTodo } from '../../redux/filterSlice';

const Form = () => {
  const dispatch = useDispatch();
  const handleSubbmit = event => {
    const text = event.target.elements.search.value;

    dispatch(addTodo({ text: text, id: nanoid() }));

    event.preventDefault();
    event.target.elements.search.value = '';
  };
  const handleFilter = event => {
    dispatch(filterTodo(event.target.value));
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubbmit}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
        <input className={style.input} onChange={handleFilter} />
      </form>
    </>
  );
};

export default Form;
