import React,{useState} from 'react';
import axios from 'axios';
import './Api.css';


const WeatherAPI = () => {
    const [city, setCity] = useState("")
    const [data, setData] = useState(
      {
        description:"",
        humidity: 0,
        pressure: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        country:""
      }
      )

    const handelClick=()=>
    {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=38fbbb0845b0951a7cda2af46312488e`)
        .then((response)=>
        {
          console.log(data);
            setData(
              {
                description:response.data.weather[0].description,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                temp: (response.data.main.temp-273.15).toFixed(2),
                temp_max: (response.data.main.temp_max-273.15).toFixed(2),
                temp_min: (response.data.main.temp_min-273.15).toFixed(2),
                country:response.data.sys.country
              }
            )
            
        }
        )
    }
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,96C672,96,768,160,864,160C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

    <div style={{marginTop:"-10%"}}>
        <center>
            <div>
                <h1>Weather API using react js</h1>
                <input type="text" value={city} onChange={(e)=> {setCity(e.target.value);}} placeholder="Enter city name"></input>
                <button type="submit" onClick={handelClick} >Search</button>
                {/* <h1>{data.temp}</h1> */}
            </div>
        <br></br>
        

          <div className="outercontainer">
              <div className="container">
                <div className='temp' >
                
                  <h3>{city}</h3>
                  <h3>{data.temp} °C</h3>
                  </div>  
          </div>


          <div className="container">
                <div className="row">
                  <h3>Max temp</h3>
                  <h3>{data.temp_min} °C</h3>
                </div>

                <div className="row">
                  <h3>Min temp</h3>
                  <h3>{data.temp_min} °C</h3>
                </div>
          </div>

          <div className="container">
                <div className="row">
                  <h3>Description</h3>
                  <h3>{data.description}</h3>
                </div>

                <div className="row">
                  <h3>Humidity</h3>
                  <h3>{data.humidity}</h3>
                </div>
          </div>

          <div className="container">
                <div className="row">
                  <h3>Pressure</h3>
                  <h3>{data.pressure}</h3>
                </div>

                <div className="row">
                  <h3>Country</h3>
                  <h3>{data.country}</h3>
                </div>
          </div>

              
          </div>

          

        </center>
        <br/>
        
    </div>
    </>
  )
}

export default WeatherAPI