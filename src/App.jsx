import { Route, Switch } from 'react-router-dom';
import CheeseDetail from './views/Detail/CheeseDetail';
import CheeseForm from './views/Form/CheeseForm';
import CheeseList from './views/List/CheeseList';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/:id">
          <CheeseDetail />
        </Route>
        <Route path="/new">
          <CheeseForm />
        </Route>
        <Route path="/">
          <CheeseList />
        </Route>
      </Switch>
    </>
  );
}
