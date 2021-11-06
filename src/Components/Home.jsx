import React from 'react'
import '../styles/Home.css'
import { useState } from 'react';
import {updateData} from '../actions/index';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import Clock from './Home/Clock';

function Home() {
    const [place,setPlace] = useState("");;
   
    const dispatch = useDispatch();
    return (
        <div className="homepage">
            <Clock />
            <div className="main">
                <div className="left-main">
                    <div className="main-text">
                        <p className="welcome">Welcome</p>
                        <p className="to-the">to the</p>
                        <p className="weather-app">Weather App.</p>
                    </div>
                    <div className="main-input">
                        <input type="text" placeholder="City name" className="actual-input" value={place} onChange={(e) => setPlace(e.target.value)} />
                        <Link to='/weather'>
                            <button className="submit-btn" onClick={()=>{
                                dispatch(updateData(place))}}>
                            <img src={require('../assets/search-icon.png').default} alt="" className="search-icon" />
                            </button>
                        </Link>
                    </div>
                </div>
                <img src={require("../assets/homepage.svg").default} alt="" className="homepage-img"/>
            </div>
        </div>
    )
}

export default Home

 /*
    const Loading = () => {
        return new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      };
    function successFunction() {
        setSuccess(true);
        Loading().then(() => {
          setSuccess(false);
        });
      }
      */