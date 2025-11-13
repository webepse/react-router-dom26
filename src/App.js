import './App.css';
import { Link} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
    // Déclaration d'une nouvelle variable d'etat
    const [valeur, setValeur] = useState(0)
    const [fruit, setFruit] = useState("Fraise")
    const [league, setLeague] = useState({
        membre1 : {
            nom: "Batman",
            age: 45
        }
    })
    // pour modifier le state => la fonction setState
    //setState()
    //setFruit()
    //setLeague()

    useEffect(() => {
        console.log('update fruit')
    },[fruit])

    const handleClick = () =>{
        setFruit("Pomme")
    }

    const handleClick2 = () =>{
        setValeur(1)
    }

  return (
    <>
        <h1>Home Page</h1>
        <div>Valeur du state (fruit): {fruit}</div>
        <div>Valeur du state (state): {valeur}</div>
        <div>Valeur du state (league.membre1): {league.membre1.nom}</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/marques">Liste des marques</Link></li>
            <li><Link to="/cars">Liste de voitures</Link></li>
            <li><Link to="/cars/new">Création d'une voiture</Link></li>
        </ul>
        <button onClick={handleClick}>Changer le fruit</button>
        <button onClick={handleClick2}>Changer le state</button>
    </>
  );
}

export default App;
