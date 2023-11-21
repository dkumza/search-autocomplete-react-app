export default function autoComplete({ cities, clicked }) {
   return (
      <ul className=" flex flex-col w-full divide-y">
         {/* from cities props display li ele to DOM */}
         {cities.slice(0, 10).map((city, index) => (
            <li
               // on click return city value
               onClick={() => clicked(city)}
               className="hover:cursor-pointer hover:bg-slate-50 w-full p-2 px-4"
               key={index}
            >
               {city}
            </li>
         ))}
      </ul>
   );
}
