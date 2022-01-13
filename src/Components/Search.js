import react, { useState } from "react";
import Weather from "./Weather";

const Search = () => {

    const styles = {
        input: {
            appearance: 'none',
            border: '1px solid black',
            padding: '10px',
            borderRadius: '4px'
        },
        button: {
            padding: '10px',
            appearance: 'none',
            border: '1px solid black',
            textTransform: 'uppercase',
            borderRadius: '4px',
            background: 'black',
            color: 'white'
        }
    }

    const [searchText, setSearchText] = useState("")
    const [location ,setLocation] = useState({})
    const [current, setCurrent] = useState({})
    const [error, setError] = useState(undefined)

    const API_KEY = "7f3057c1909d4356bfb22040221301"

    

    const changeHandler = (event) => {
        setSearchText(event.target.value)
    }

    const fetchWeather = async() =>{
        const searchUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchText}&aqi=no`
        try {
            const response = await fetch(searchUrl)
            const {location, current, error} = await response.json()
            setLocation(location || {})
            setCurrent(current || {})
            setError(error || undefined)
        }
        catch(error) {
            console.log(error)
        }
    }

    const handleSearch = () => {
        fetchWeather()
    }
    return (
        <>
            <input type="search" value={searchText} onChange={changeHandler} style={styles.input}/>
            <button onClick={handleSearch} style={styles.button}> Search </button>
            {
                location && location.name && current && current.condition && <Weather location={location} current={current}/>
            }
            {
                error && error.message && <p>{error.message}</p>
            }
        </>
    ) 

}

export default Search