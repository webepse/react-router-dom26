import { useRouteError } from "react-router-dom";

function ErrorPage(props) {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="container">
            <h1>Oups ! Une erreur est survenue</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>{error.error.message}</p>
        </div>
    );
}

export default ErrorPage;