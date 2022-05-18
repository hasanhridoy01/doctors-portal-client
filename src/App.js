import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nabvar from './Pages/Shared/Nabvar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appiontment from './Pages/Appiontment/Appiontment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import AllUsers from './Pages/Dashboard/AllUsers';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='px-12 max-w-7xl mx-auto'>
      <ToastContainer />
     <Nabvar></Nabvar>
     <Routes>
       <Route path='/' element={ <Home></Home> }></Route>
       <Route path='/home' element={ <Home></Home> }></Route>
       <Route path='/appiontment' element={ 
         <RequireAuth>
           <Appiontment></Appiontment>
         </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={ 
         <RequireAuth>
           <Dashboard></Dashboard>
         </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='alluser' element={<AllUsers></AllUsers>}></Route>
          <Route path='adddoctor' element={<AddDoctor></AddDoctor>}></Route>
          <Route path='managedoctor' element={<ManageDoctors></ManageDoctors>}></Route>
        </Route>
       <Route path='/about' element={ <About></About> }></Route>
       <Route path='/login' element={ <Login></Login> }></Route>
       <Route path='/signup' element={ <SignUp></SignUp> }></Route>
     </Routes>
    </div>
  );
}

export default App;
