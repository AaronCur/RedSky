import React from "react";

//Has no state so it doesnt have to be a class
//however you now have to pass in props
//Can get rid of return when only returning one object which is the div in this case
const Weather = props => (
  <div className = "weather__info">
    {
      props.city && props.country && <p className="weather__key">Location:
        <span className="weather__value"> {props.city}, {props.country}</span>
      </p>
    }
    {
      props.temperature && <p className="weather__key">Temperature:
        <span className="weather__value"> {props.temperature}</span>
        </p>
    }
    {
      props.humidity &&   <p className="weather__key"> Humidity:
         <span className="weather__value"> {props.humidity}%</span>
         </p>
    }
    {
      props.description &&   <p className="weather__key">Conditions:
        <span className="weather__value"> {props.description} </span>
        </p>
    }
    {
      props.error && <p className = "weather__error">{props.error}</p>
    }
  </div>
);


export default Weather;
