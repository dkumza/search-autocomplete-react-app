import { useState } from "react";

import Input from "./components/Input";
import AutoComplete from "./components/Autocomplete";

import "./App.css";

import { CITIES } from "./data";

function App() {
   const [value, setValue] = useState("");

   const handleChange = (e) => {
      setValue(e.target.value);
   };

   const filteredResult = CITIES.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
   );
   return (
      <>
         <Input onChange={handleChange} />
         {value && <AutoComplete cities={filteredResult} />}
      </>
   );
}

export default App;
