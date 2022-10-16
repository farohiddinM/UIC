import './App.css';
import { Routes,Route } from 'react-router-dom';

//components
import Home from './components/Home/Home'
import Employees from './components/Employees/Employees'
import Information from './components/Information/Info'
import AddUser from './components/AddUser/AddUser'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employees' element={<Employees />} /> 
        <Route path='/info' element={<Information />} />
        <Route path='/adduser' element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
