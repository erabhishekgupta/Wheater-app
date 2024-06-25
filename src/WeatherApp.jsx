import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import './info.css';

export default function WeatherApp() {
    let [weather , setweather] = useState({
        city : "Delhi" ,
        feelsLike : 39.28,
        temp : 33 ,
        Weather : "broken clouds" ,
        Humidity : 55
    });

    let updateResult =(newinfo)=>{
        setweather(newinfo);
    }
    return (
        <div className="weather">
            <h1>Weather App</h1>
            <SearchBox updateinfo={updateResult}/>
            <InfoBox info={weather}/>
        </div>
    )
}