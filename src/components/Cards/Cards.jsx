import style from "./Cards.module.css"
import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;

   return (
      <div className={style.cards}>
         {
            characters.map((character) =>{
               return(
                  <Card
                     name = {character.name}
                     species = {character.species}
                     gender = {character.gender}
                     image  = {character.image}
                     onClose = {()=>props.onClose(character.id)}
                     key = {character.id}
                     id= {character.id}
                  />
               )
            })
         }
      </div>
   )
}
