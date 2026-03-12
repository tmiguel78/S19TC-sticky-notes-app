import NoteBoard from "./components/NoteBoard"
import { ColorProvider } from "./context/ColorContext"
import './App.css'
import './index.css'

function App() {
  return (
    <ColorProvider>
    <div className="app-container">
      <h1>🗒️ Sticky Notes</h1>
      <NoteBoard/>

    </div>
    </ColorProvider>
  )
}

export default App
