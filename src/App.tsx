
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Employee from './Components/Employee/Employee';
import AddEmployee from './Components/Employee/AddEmployee';
import AddCustomer from './Components/Home/AddCustomer';


function App() {
  return (
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
       <Route path="/home" element={<Home />} />
       <Route path="/home/addcustomer" element={<AddCustomer />} />
       <Route path="/employee" element={<Employee />} />
       <Route path="/employee/addemployee" element={<AddEmployee />} />
       </Routes>

    </BrowserRouter>
  );
}

export default App;
