export default function autoComplete({ cities }) {
   return (
      <ul>
         {cities.map((city, index) => (
            <li key={index}>{city}</li>
         ))}
      </ul>
   );
}
