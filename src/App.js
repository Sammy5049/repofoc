
import './App.css';
import Navbar from './component/Products/Navbar/Navbar';
import Products from './component/Products/Products';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div >
      <BrowserRouter>
            <Navbar/>
          <Routes>
             
               <Route path="Products/" element={<Products />}/>
               

            
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
