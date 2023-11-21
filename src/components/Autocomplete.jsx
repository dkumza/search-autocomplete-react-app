export default function autoComplete({ cities, clicked }) {
   return (
      <ul className=" flex flex-col w-full divide-y">
         {cities.map((city, index) => (
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
