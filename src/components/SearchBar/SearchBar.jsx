import style from "./SearchBar.module.css"
import { useState } from "react"

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")
   const handleCharacter = (event) => {
      setCharacter(event.target.value);
      console.log(event.target.value)
   }

   return (
      <div className={style.SearchBar}>
         <input type='search' value={character} onChange={handleCharacter} />
         <button onClick={()=>props.onSearch(character)}>Agregar</button>
      </div>
      
      )
}
