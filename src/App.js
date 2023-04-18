import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Clients from "./components/pages/Clients";
import Units from './components/pages/Units';
import Navigation from './components/layout/Navigation';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navigation />
        <Routes>
          <Route exact path='/clients' element={<Clients/>} />
          <Route exact path='/units' element={<Units/>} />
        </Routes>
    </div>
  );
}

export default App;
