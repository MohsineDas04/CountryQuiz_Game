import "./App.css";
// Hooks Import
import { useEffect, useState } from "react";
// Components Import
import GameCompo from "./GameComponent";
// External libraries Import
import axios from "axios";
// Context Import
import { countriesContext } from "./CountriesContext/CountiesContext";
function App() {
   const [countriesNames, setCountriesNames] = useState([
      { value: "", flag: null },
      { value: "", flag: null },
      { value: "", flag: null },
      { value: "", flag: null },
   ]);
   const [indexes, setIndexes] = useState({ first: null, second: null, third: null, fourth: null });
   const [runCount, setRunCount] = useState(0);
   const [apiOutput, setApiOutput] = useState();

   useEffect(() => {});
   useEffect(() => {
      axios.get("https://restcountries.com/v3.1/all").then(function (response) {
         setApiOutput(response.data);
         countriesNames[0].firstCountry = response.data[0].name.common;
         console.log(response.data[0].name.common);
         countriesNames[0].secondCountry = response.data[0].flags.svg;
         console.log(response.data[0].flags.svg);
      });
   }, []);

   return (
      <countriesContext.Provider value={apiOutput}>
         <div className="App">
            <GameCompo />
         </div>
      </countriesContext.Provider>
   );
}

export default App;
