import './App.css';
import CounsellorList from './components/CounsellorList';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
const router=createBrowserRouter([
  
  {
    path:"/counsellor",
    element:<CounsellorList/>
  },
  {
    path:"/",
    element:<Landing/>
  }

])
function App() {
  const path={
    "/counsellor":<CounsellorList/>,
  }
  
  return (
    <div className="App">
           <RouterProvider router={router}/>
    </div>
  );
}

export default App;
