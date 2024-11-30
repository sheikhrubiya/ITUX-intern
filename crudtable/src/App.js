import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Update from './Update';
import Read from './Read';
function App() {
  
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/read/:id' element={<Read/>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
