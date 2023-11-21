import { useState } from "react";

import Input from "./components/Input";
import AutoComplete from "./components/Autocomplete";
import Header from "./components/Header";

import "./App.css";

import { CITIES } from "./data";

function App() {
   const [value, setValue] = useState("");
   const [showAutoComplete, setShowAutoComplete] = useState(true);

   // onClick 'ing li element change input value to clicked element(city value)
   const handleClick = (city) => {
      setValue(city);
      // when li element is clicked set autocomplete element to false - to hide
      setShowAutoComplete(false);
   };

   // onChange of element setValue to text entered to input field by user
   const handleChange = (e) => {
      setValue(e.target.value);
      // show autocomplete element when input is not empty
      setShowAutoComplete(true);
   };

   // compare input value with CITIES array and returns matches
   const filteredResult = CITIES.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
   );

   return (
      <div className="flex flex-col items-center py-12 w-96 mx-auto">
         <Header />
         <Input value={value} onChange={handleChange} />
         {/* if all values are TRUE, display component, and if component is clicked - passes props to component */}
         {showAutoComplete && value && (
            // passes props of filtered cities result
            <AutoComplete cities={filteredResult} clicked={handleClick} />
         )}
      </div>
   );
}

export default App;
