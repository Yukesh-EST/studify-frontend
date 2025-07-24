import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Abnormalities from './pages/abnormalities';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Abnormalities />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
