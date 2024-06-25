import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SearchBox({updateinfo}) {
    const [city, setCity] = useState("");
    const [weatherInfo, setWeatherInfo] = useState(null);
    let [error , setError]=useState(false);

        const getWeatherInfo = async () => {
           try{
            const apiKey = "3ba40351b66bf4b2547788a3cc6acc13"; // Replace with your actual API key
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
            // try {
                const response = await fetch(url);
                // if (!response.ok) {
                //     throw new Error(`Error: ${response.statusText}`);
                // }
                const jsonResponse = await response.json();
                // setWeatherInfo(jsonResponse);
                console.log(jsonResponse);
                let result = {
                  city : city,
                  temp : jsonResponse.main.temp,
                  feelsLike : jsonResponse.main.feels_like,
                  Humidity : jsonResponse.main.humidity,
                  Weather : jsonResponse.weather[0].description,
                }  
                console.log(result);
                return result;
            // } catch (error) {
            //     console.error("Error fetching the weather data:", error);
            // }
        }  catch(error){
            throw error ;
     }}
   

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
           let newinfo = await getWeatherInfo();
           updateinfo(newinfo);
        }
        catch(error){
            setError(true)
        }
       
       
    }

    return (
        <div className='container'>
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Cityname"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    required
                />
                <br />
                <br />
                <Button
                    variant="contained"
                    type='submit'
                >
                    Search
                </Button>
                {error && <p style= {{color: '#f44336'}}>NO PLACE FOUND!</p>}
            </form>
            {/* {weatherInfo && (
                <div className="weather-info">
                    <h4>Weather in {weatherInfo.name}</h4>
                    <p>Temperature: {(weatherInfo.main.temp - 273.15).toFixed(2)}°C</p>
                    <p>Condition: {weatherInfo.weather[0].description}</p>
                </div>
            )} */}
          
            
        </div>
    );
}
