import react, { useState } from "react";
import Weather from "./Weather";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const Search = () => {

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
            <div className="Search">
                <TextField sx={{marginRight: '5px'}} size="small" label="City Name" variant="outlined" value={searchText} onChange={changeHandler} />
                <Button sx={{lineHeight: '1.98'}} variant="contained" size="medium" onClick={handleSearch}> Search </Button>
            </div>
            
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