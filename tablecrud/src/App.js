import Home from './Home';
import Read from './Read';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
