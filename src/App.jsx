import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInformation from './components/WeatherInformation/WeatherInformation'
import WeatherInformation5Days from './components/WeatherInformation/WeatherInformation5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = '03fb4e94c5ec1d07d9e5eec4fb182868'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=&units=metric` 

    const apiDataWeather = await axios.get(url) 
    const apiDataWeather5Days = await axios.get(url5Days) 

    setWeather(apiDataWeather.data)
    setWeather5Days(apiDataWeather5Days.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do tempo</h1>
      <input ref={ inputRef} type="text" id="city" placeholder='Digite o nome da cidade'/>
      <button onClick={ searchCity }>Buscar</button>

      {weather && <WeatherInformation weather={ weather }/>}
      {weather5Days && <WeatherInformation5Days weather5Days={ weather5Days }/>}
    </div>
  )
}

export default App
