import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import './Data.css'

function Data() {
    const details = useSelector(state => state.weather);
    return (
        <div className="weather-info-actual">
            <div className="info-top">
                <Link to="/">
                <button className="info-top-home"><img src={require("./assets/home.png").default} alt="" /></button>
                </Link>
                <img className="info-top-img" src={require("./assets/Weather-rafiki.svg").default} alt="" />
                <div className="info-top-data">
                    <h3 id="region">{details.location.region}</h3>
                    <p id="location">{details.location.tz_id}</p>
                </div>   
            </div>
            <div className="info-bottom">
                <div className="info-left">
                    <div className="info-left-img">
                        <img src={details.current.condition.icon} alt="" className="info-btm-left-pic" />
                        <p id="left-img-p">{details.current.condition.text}</p>
                    </div>
                    <div className="info-left-temp">
                        <div className="temp">
                            <p id="temp-num">{details.current.temp_c}</p>
                            <p>- temperature</p>
                        </div>
                        <div className="temp">
                            <p id="temp-num">{details.current.feelslike_c}</p>
                            <p>- feels like</p>
                        </div>
                    </div>  
                </div>
                <div className="info-right">
                    <div className="info-card">
                        <img className="info-img" src={require("./assets/humidity.png").default} alt="" />
                        <div className="seperator"></div>
                        <div className="info-desc">
                            <p>Humidity</p>
                            <h3>{details.current.humidity}</h3>
                        </div>
                    </div>
                    <div className="info-card">
                        <img className="info-img" src={require("./assets/precipitation.png").default} alt="" />
                        <div className="seperator"></div>
                        <div className="info-desc">
                            <p>Pressure</p>
                            <h3>{details.current.pressure_mb} mb</h3>
                        </div>
                    </div>
                    <div className="info-card">
                        <img className="info-img" src={require("./assets/wind.png").default} alt="" />
                        <div className="seperator"></div>
                        <div className="info-desc">
                            <p>Wind Speed</p>
                            <h3>{details.current.wind_kph} km/h {details.current.wind_dir}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
