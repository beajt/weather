// React Modules
import { useEffect, useState } from "react";
// Components
import Header from "./Components/Header";
import Form from "./Components/Form";
import Instruction from "./Components/Instruction";
// Styling
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [queryCity, setQueryCity] = useState("");
  const [temperature, setTemperature] = useState ("");
  const [formError, setFormError] = useState ("false");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const controlledInput = city.trim();
    setQueryCity(controlledInput);
    setCity("");
  };

  useEffect(() => {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.search = new URLSearchParams({
      q: queryCity,
      appid: "0e1cf717b18acacd64a117757c6eeea9",
      units: "metric",
    });

    //  if (queryCity !== "")
    if (queryCity) {
      fetch(url)
        .then(data => data.json())
        .then(response => {
          setTemperature(response.main.temp)
          setFormError(false);
        })
        .catch ( error => setFormError(true) )
    }
  }, [queryCity]);

  return (

    <main>
      <Header city={queryCity} />
      <Instruction />
      <Form 
      city={city}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
      />
      
    <h2>{formError ? "Please search for another city" : null}</h2>

    {
      formError ? null : (
        temperature ? (
          <div>
            <p>{ temperature }</p>
          </div>
        ) : null
      )
    }

    </main>
  );
};

export default App;
