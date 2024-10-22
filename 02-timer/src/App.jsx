import {useEffect, useState } from 'react'
import './App.css'

function App(){

    // verifica si ha clickeado play o pause
    const [isRunning, setIsRunning] = useState(false)

    // SI hay datos almacenado en el localStorage o valor por defecto 0
    const [countTime, setCountTime] = useState(()=> {
        const timerLocalStorage = JSON.parse(localStorage.getItem('timer'))
        return timerLocalStorage ? Number(timerLocalStorage) : 0
    })

    // si ha clickeado play o pause, su simbolo cambia 
    const changeSymbolToStartOrPause = isRunning ? 'fa-solid fa-pause' : 'fa-solid fa-play'

    // funcion de start o pause el timer
    const startOrPauseTimer = () => setIsRunning(!isRunning)
    // resetear el timer a sus valores iniciales
    const resetTimer = () => {
        setIsRunning(false)
        setCountTime(0)
    }

    // guardar el ultimo resultado en el localStorage
    useEffect(() => {
        localStorage.setItem('timer', JSON.stringify(countTime))
    },[countTime])

    // funcionalidad del timer
    useEffect(()=> {
        let interval = null;
        if(isRunning){
            interval = setInterval(() => {
                setCountTime((auxCount) => auxCount + 1)
            },1000)
        } 

        return ()=> clearInterval(interval)
    },[isRunning,countTime])


    return(
        <main>
            <div>
                <h1>Timer created by Cristian Delgado</h1>
            </div>

            <div>
                <p><strong>{countTime}</strong></p>
            </div>

            <div>
                <button onClick={startOrPauseTimer} ><i className={changeSymbolToStartOrPause}></i></button>
                <button onClick={resetTimer}><i className="fa-solid fa-stop"></i></button>
            </div>
        </main>
    )
    
}

export default App