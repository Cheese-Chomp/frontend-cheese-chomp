import { Route, Switch } from 'react-router-dom';
import CheeseDetail from './views/CheeseDetail';
import CheeseList from './views/CheeseList';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/:id">
          <CheeseDetail />
        </Route>
        <Route path="/">
          <CheeseList />
        </Route>
      </Switch>
    </>
  );
}
