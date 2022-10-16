import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './Components/Layout'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
