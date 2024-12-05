import './App.css'
import { useQuery } from './hooks/useQuery'
import { Header } from './components/Header'
import { Main } from './components/Main'

function App() {

  const {handleInputChange, searchImage, query, history, gallery} = useQuery()

  return (
    <div>
      <Header handleInputChange={handleInputChange} searchImage={searchImage} query={query} />
      <Main gallery={gallery} history={history}/>
    </div>
  )
}

export default App
