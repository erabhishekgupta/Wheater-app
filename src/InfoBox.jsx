import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './info.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({info}){
    const image = "https://media.istockphoto.com/id/904784522/photo/dramatic-sky.jpg?s=1024x1024&w=is&k=20&c=Uy_ICUt-c6zvmnMe4Orn_nbmH3VhqQe01cVfACK9gNc=" ;
    const hot_url = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=2048x2048&w=is&k=20&c=GFLYF-pRw41qTUwGyU4V1J1qcI0ilFkKx0zuDPd_uqE=" ;
    const rain_url = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=" ;
    const cold_url = "https://media.istockphoto.com/id/1064083590/photo/winter-scene-snowfall-in-the-woods.jpg?s=2048x2048&w=is&k=20&c=g_2y97bBk_Jbc0IHGBIl9cjNH7iQSbcyW3Fr6oSmuRY=" ;


  
    return(
     <>
     <div className="infobox">
      <h2>WeatherInfo- &nbsp;{info.Weather}</h2>
      <div className="card">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="weather_report"
        height="140"
        image={info.humidity > 60 ? rain_url : info.temp>25 ? hot_url : cold_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;
          {info.humidity > 60 ? <ThunderstormIcon/> : info.temp>25 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" component={"span"}>
        <div>
          Temp : { info.temp}&deg;C
        </div>
      
        <div>
          Humidity : { info.Humidity}%
        </div>
        <div>
         The weather seems to be <i>{ info.Weather} </i>and it feels like it is { info.feelsLike}&deg;C
        </div>
    
        </Typography>
      </CardContent>
      
        
    </Card>
    </div>

     </div>
     
     
     </>


    )
}