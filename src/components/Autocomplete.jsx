export default function autoComplete({ cities }) {
   return (
      <ul className="p-4 flex flex-col justify-start w-1/3 divide-y">
         {cities.map((city, index) => (
            <li key={index}>{city}</li>
         ))}
      </ul>
   );
}
