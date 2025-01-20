import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Carousel />
      <h className="text-5xl font-semibold text-white">Currently Airing</h>
      <Card />
    </>
  )
}

export default App
