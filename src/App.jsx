import { Route, Switch } from 'react-router-dom';
import CheeseList from './views/CheeseList';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <CheeseList />
        </Route>
      </Switch>
    </>
  );
}
