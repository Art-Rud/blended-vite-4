import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import Form from '../src/components/Form/Form';
import TodoList from './components/TodoList/TodoList';

import { useDispatch, useSelector } from 'react-redux';
import { currentTodo, selectCurentTodo } from './redux/todosSlice';
import EditForm from './components/EditForm/EditForm';
export const App = () => {
  const onEdit = useSelector(selectCurentTodo);
  const todos = useSelector(state => state.todos.items);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {onEdit ? <EditForm /> : <Form />}
          {/* <EditForm />
          <Form /> */}
          <TodoList />
          {!todos && <Text textAlign="center">Create your first todo😉</Text>}
        </Container>
      </Section>
    </>
  );
};
