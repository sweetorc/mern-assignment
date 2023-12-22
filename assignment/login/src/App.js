
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Main from './Main';
import Signup from './Signup';
import { Toaster } from 'react-hot-toast';

function App() {
  const router =createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children:[
        {
          path: '/login',
          element:<Login></Login>,
        },
        {
          path: '/',
          element:<Signup></Signup>
        }
      ]
    }
  ])
  return (
    <div className="App">
    <Toaster></Toaster>
    <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
