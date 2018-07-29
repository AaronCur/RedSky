import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "2e6fcda5760f092f95b27f5ff2394d77";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  //Arrow method is quicker for declaring custom functions(dont have to bind this.)
  //Async and await an easy way to make http calls. Makes web requests easy
  getWeather = async (e) => {
      //Stop refresh
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;

      //Makes a template string allowing you to inject variables you have defined in your files
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      //Converts response to JSON format
      const data = await api_call.json();
      if(city && country){
        this.setState({
           temperature: data.main.temp,
           city: data.name,
           country: data.sys.country,
           humidity: data.main.humidity,
           description: data.weather[0].description,
           error: ""
         });
    }else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }

  }

  render(){
    return(
      <div>
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
               <div className="col-xs-5 title-container">
                 <Titles />
               </div>
               <div className="col-xs-7 form-container">
                 <Form getWeather={this.getWeather} />
                 <Weather
                   temperature={this.state.temperature}
                   humidity={this.state.humidity}
                   city={this.state.city}
                   country={this.state.country}
                   description={this.state.description}
                   error={this.state.error}
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
};

export default App;
