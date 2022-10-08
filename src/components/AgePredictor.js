import "../css/AgePredictor.css"

//Hooks
import {  useState } from 'react'
import axios from 'axios';

function AgePredictor () {

    const [ agePrediction, setAgePrediction] = useState([])

    

    const Calcular = (e) => {
        e.preventDefault();
        
        const name = [{name: 'laura'},{name: 'laura'},{name: 'laura'}]
        const endPoint = `https://api.agify.io?name=${name}`
        axios.get(endPoint)
        .then(res => {
            const prediction = res.data
            console.log(prediction);
            setAgePrediction(prediction)
            console.log(agePrediction);
        })
        .catch(error => {
            alert('error, vuelve a intentar')
        } )
    }
    
    return(
        <>
        <h1>Predictor de Edad</h1>
        <p>Este predictor te permite ingresar uno o varios nombres para calcular la edad del nombre. <br/> Tambien puedes incluir el país.</p>


        <form onSubmit={Calcular} className='prediction-form-container'>
            <label id='name' >Ingresa tu nombre</label>
            <br/>
            <input type='text' name='name' required minLength='3'/>
            <br/>
            <label id='country'>Selecciona tu pais <span>(opcional)</span> </label>
            <br/>
            <input type='select' name='country'></input>
            <br/>
            <button type='submit'>Calcular</button>
        </form>

        <h2>Resultados</h2>
        
        

        

        </>
    )    
}

export default AgePredictor;