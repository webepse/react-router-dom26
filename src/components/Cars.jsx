import {Link, Outlet} from 'react-router-dom';

const Cars = () => {
    return (
        <div className="container">
            <h1>Liste des voitures</h1>
            <Link to="/">Retour</Link>
            <input type="text"/>
            <ul>
                <li><Link to={"/cars/Giulia"}>Alfa Romeo Giulia</Link></li>
                <li><Link to={"/cars/Tonale"}>Alfa Romeo Tonale</Link></li>
                <li><Link to={"/cars/Giulietta"}>Alfa Romeo Giulietta</Link></li>
                <li><Link to={"/cars/Milano"}>Alfa Romeo Tonale</Link></li>
                <Outlet />
            </ul>
        </div>
    )
}

export default Cars;