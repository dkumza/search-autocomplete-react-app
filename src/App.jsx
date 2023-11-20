import { useState } from "react";

import Input from "./components/Input";
import AutoComplete from "./components/Autocomplete";
import Header from "./components/Header";

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
      <div className="flex flex-col items-center py-12">
         <Header />
         <Input onChange={handleChange} />
         {value && <AutoComplete cities={filteredResult} />}
      </div>
   );
}

export default App;
