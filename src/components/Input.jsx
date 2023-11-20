// import { cities } from "../data";

export default function inputField({ ...props }) {
   return (
      <input
         className="border rounded-xl shadow-lg w-1/3 h-12 px-4 focus:outline-none focus:border-sky-500"
         type="text"
         placeholder="Search for ..."
         {...props}
      />
   );
}
