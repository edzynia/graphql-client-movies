import { useRoutes } from 'react-router-dom';
import Details from '../routes/Details';
import Home from '../routes/Home';

const App = () => {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:id', element: <Details /> },
  ]);

  return element;
};
export default App;
