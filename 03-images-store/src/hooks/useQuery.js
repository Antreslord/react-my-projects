import { useState, useEffect } from "react"

export function useQuery () {
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
    
        fetch(`https://api.unsplash.com/search/photos?query=${lastIndex}&client_id=${import.meta.env.VITE_ACCES_KEY}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          const {results} = data
          setGallery(results) 
          console.log(gallery)
        })
    
    },[history])

    return { searchImage, handleInputChange, query, history, gallery }
}