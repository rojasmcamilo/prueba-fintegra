import "../css/AgePredictor.css"

//Hooks
import {  useState } from 'react'
import axios from 'axios';

function AgePredictor () {

    const [ agePrediction, setAgePrediction] = useState('')


    const Calcular = (e) => {
        e.preventDefault();
        
        const name = e.target.name.value;

        const endPoint = `https://api.agify.io?name=${name}`
        axios.get(endPoint)
        .then(res => {
            const prediction = res.data
            console.log(prediction);
            setAgePrediction(prediction)
        })
        .catch(error => {
            alert('error, vuelve a intentar')
        } )
    }
    
    return(
        <>
        <h1>Predictor de Edad</h1>
        
        <form onSubmit={Calcular}>
            <label id='name'>Ingresa tu nombre</label>
            <input type='text' name='name'/>
            <br/>
            <label id='country'>Selecciona tu pais</label>
            <input type='select' name='country'></input>
            <br/>
            <button type='submit'>Calcular</button>
        </form>

        <h2>Resultados</h2>
        <p>Nombre:{agePrediction.name} </p>
        <p>Edad:{agePrediction.age} </p>

        </>
    )    
}

export default AgePredictor;