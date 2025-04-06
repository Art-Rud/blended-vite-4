import Text from '../Text/Text';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
const TodoList = () => {
  const todos = useSelector(state => state.todos.items);
  const filter = useSelector(state => state.filter);
  const filteredTodos = todos.filter(todo => {
    return (
      todo &&
      todo.text &&
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <>
      {!todos && <Text textAlign="center">We did not find any todo😯</Text>}{' '}
      {filteredTodos.length > 0 ? (
        <Grid>
          {filteredTodos.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo
                id={todo.id}
                counter={index + 1}
                text={todo.text}
                todo={todo}
              />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text textAlign="center">No todos match your filter.</Text>
      )}
    </>
  );
};

export default TodoList;
