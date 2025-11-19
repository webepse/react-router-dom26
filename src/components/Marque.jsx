import React from 'react';
import { useParams } from 'react-router-dom'

function Marque(props) {
    let { name } = useParams()
    return (
        <>
            <h1>Marque: {name}</h1>
        </>
    );
}

export default Marque;