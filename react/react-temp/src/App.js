import './App.css';
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes/routes'


function App() {
  console.log('app+++')
  return (
    <Routes>
      {
        routes.map(({path, element}) => {
          return <Route path={path} element={element} key={path}></Route>
        })
      }
    </Routes>
  );
}

export default App;
