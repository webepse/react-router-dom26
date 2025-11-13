import { useParams } from 'react-router-dom'

function Car(props) {
    let { name } = useParams()
    return (
        <>
            <h1>La voiture : {name}</h1>
        </>
    );
}

export default Car;