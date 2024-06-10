import { useState } from 'react'
import Header from './Pages/Header';
import Sidebar from './Pages/Sidebar';
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import ListOrder from './Components/Orders/ListOrder';
import Setup from './Components/ProcessConfiguration/Setup';
import AssignmentComponent from './Components/Assignment/AssignmentComponent';
import Productionplan from './Components/ProductionPlan/ProductionPlan';
import MaterialStatus from './Components/Material/MaterialStatus';
import MaterialInventory from './Components/Material/MaterialInventory';
import Inventory from './Components/Inventory/Inventory';
import TeamsManagement from './Components/ProcessConfiguration/TeamsManagement/TeamsManagement';
import WorkstationManagement from './Components/ProcessConfiguration/WorksationManagement/WorkstationManagement';


 function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path="/listOrder" element={<ListOrder/>}/>
    <Route path='/setup' element={<Setup />} />
    <Route path='/assignment' element={<AssignmentComponent />} />
    <Route path='/production-plan' element={<Productionplan />} />
    <Route path='/material-status' element={<MaterialStatus />} />
    <Route path='/material-inventory' element={<MaterialInventory />} />
    <Route path='/inventory' element={<Inventory />} />
    <Route path='/team-management' element={<TeamsManagement />} />
    <Route path='/workstation-management' element={<WorkstationManagement />} />
     </Routes>
  </BrowserRouter>
  );
}


export default App