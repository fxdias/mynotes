import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
