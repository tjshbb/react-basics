import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Header name="Taylor" color="blue" />
      <Main greet="Howdy" />
      <Sidebar greet="Hi" />
    </>
  )
}

export default App
