
import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import OpccionesPage from "./pages/OpccionesPage"
import RecomendacionesPage from "./pages/RecomendacionesPage"
import MapaPage from "./pages/MapaPage"

function App() {

  return (
    <main className="min-h-screen bg-green-400">
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/opcciones" element={<OpccionesPage />}/>
        <Route path="/recomendaciones" element={<RecomendacionesPage />}/>
        <Route path="/mapa" element={<MapaPage />}/>
      </Routes>
    </main>
  )
}

export default App
