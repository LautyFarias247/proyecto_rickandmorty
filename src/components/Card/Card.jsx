import { Link } from "react-router-dom"
import style from "./Card.module.css"
export default function Card(props) {

   return (
      <div className={style.card}>
         <div className={style.header}>
            <Link to={`detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
            <button onClick={props.onClose}>X</button>
         </div>
         <img  src={props.image} alt={props.name} />
         <div className={style.footer}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>   
      </div>
   )
}
