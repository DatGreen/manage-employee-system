
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import GetAllEmployees from './components/GetAllEmployees';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<GetAllEmployees/>} />
        <Route path='/' element={<GetAllEmployees/>}/>
        <Route path='/employeeList' element={<GetAllEmployees/>}/>
        <Route path='/addEmployee' element={<AddEmployee/>}/>
        <Route path='/updateEmployee/:id' element={<UpdateEmployee/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
