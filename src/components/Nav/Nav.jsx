import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function Nav (props) {
    return (
        <nav className={style.conteiner}>
            <ul>
                <li><Link to="home">Home</Link> </li>
                <li><Link to="about">About</Link></li>
            </ul>
            <SearchBar onSearch = {props.onSearch}/>
        </nav>
        
    )
}