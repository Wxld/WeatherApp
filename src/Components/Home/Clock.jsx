import React from 'react'
import './clock.css'
import {useEffect} from 'react'
import { useState } from 'react'
import Loader from 'react-loader-spinner'

function Clock() {
    const [data,setData] = useState({});
    const [load,setLoad] = useState(false);
    const getTime = () => {
        fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoad(true);
        })
    }
    useEffect(() => {
        getTime();
    }, []);
    const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    return (
        <div>
            {
                !load ? 
                (
                    <Loader
                        type="TailSpin"
                        color="#407BFF"
                        height={100}
                        width={100}
                        timeout={5000} //5 secs
                    />
                )
                :
                (
                    <div className="clock">
                        <h3 className="time">{data.datetime.substring(11,16)}</h3>
            
                        <p className="date">{day[data.day_of_week]}, {data.datetime.substring(8,10)} {month[data.datetime.substring(5,7)-1]} {data.datetime.substring(0,4)}</p>
                    </div>
                    
                )
            }
        </div>
    )
}

export default Clock
