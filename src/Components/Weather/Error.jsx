import React from 'react'
import {Link} from 'react-router-dom'
import './Error.css'

function Error() {
    return (
        <div className="error-404">
            <div className="error-left">
                <p className="error-main"><span id="oh-snap">oh snap!</span> You must've entered some place name  that is not available in our database currently!</p>
                <Link to="/">
                    <button className="go-home">
                        Go To Homepage
                    </button>
                </Link>
                <p className="error-footer">*We will look into this problem.</p>
            </div>
            <img src={require('../../assets/oops404.svg').default} alt="" className="error-right" />
        </div>
    )
}

export default Error;
