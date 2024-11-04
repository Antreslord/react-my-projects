import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const ACCES_KEY = 'MW9b63IilL6_JF0eFGaHxhu1MN71Bosux5lVrvSaJwE'
  //const urlAPI = `https://api.unsplash.com/search/photos?query=${query}`

  const [query, setQuery] = useState('')
  const [gallery, setGallery] = useState([])
  const [history, setHistory] = useState([])

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const searchImage = (e) => {
    e.preventDefault()

    if(query === '') return

    const currentHistory = history
    setHistory([...currentHistory, query])
    setQuery('')
  }


  useEffect(() => {
    if(history.length == 0) return

    const lastIndex = history[history.length-1]

    fetch(`https://api.unsplash.com/search/photos?query=${lastIndex}&client_id=${ACCES_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const {results} = data
      setGallery(results) 
      console.log(gallery)
    })

  },[history])



  return (
    <main>
      <h1>Image's Gallery created by Cristian Delgado </h1>
      
      <section>
        <form onSubmit={searchImage}>
          <input type="text" onChange={handleInputChange} value={query} placeholder='Busca una imagen' />
          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </section>
      
      <section>
        <ul>
          {
            history.map((item, index) => {
              return(
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </section>
      
      <section>
        <div>
          {
            gallery.map((image) => {
              console.log(image.id)
              return(
                <div key={image.id}>
                  <img src={image.urls.small} alt={image.description || 'image lost'} />
                </div>
              )
            })
          }
        </div>
      </section>

    </main>
  )
}

export default App
