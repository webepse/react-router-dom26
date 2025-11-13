import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h2>Il n'y a rien sur cette URL</h2>
            <Link to="/">Retour au site</Link>
        </>
    )
}

export default NotFound


