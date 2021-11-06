import React from 'react'
import Error from './Weather/Error';
import {useSelector} from 'react-redux';
import Data from './Weather/Data';
import Loader from 'react-loader-spinner';
import '../styles/Weather.css';

function Weather() {
    
    const details = useSelector(state => state.weather);
    console.log(details);
    return (
        <div className="weather-info">
            
            {details.location ? 
            (
                <Data />
            )
            :
            (
                <div>
                {
                    details.error ?
                    (
                        <Error/> 
                    )
                    :
                    (
                        <div className="error-handling">
                        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                        </div>
                        
                    )
                }
                </div>
                
            )}
        </div>  
    )
}
/**/
export default Weather
