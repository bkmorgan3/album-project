import './App.scss'
import AlbumsGrid from './AlbumsGrid'
import Search from './Search'


function App() {

  return (
    <main>
      <Search />
      <h1>Top Albums</h1>
      <AlbumsGrid />
    </main>
  )
}

export default App
