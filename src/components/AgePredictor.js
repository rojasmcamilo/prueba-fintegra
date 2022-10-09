import "../css/AgePredictor.css"
import { countryList } from "../data";


//Hooks
import {  useState } from 'react'
import axios from 'axios';

function AgePredictor () {

    const [agePrediction, setAgePrediction] = useState([])

    const Calcular = (e) => {
        e.preventDefault();

        const nameInput = e.target.name.value.trim().split(" ")
        const country =e.target.country.value

        console.log(country);

        let params = nameInput.map(( person , idx ) =>{
            if(nameInput.length === 1) {
                return "name=" + person
            } else {
                return "name[]=" + person   
             }
        })

        if(params.length > 1 ){
            params = params.join("&")
        } else if (params.length === 1) {
            params = params.toString()
        }
        
        const endPoint = `https://api.agify.io/?${params}`
        axios.get(endPoint)
        .then(res => {
            const prediction = res.data
            setAgePrediction(prediction)
        })
        .catch(error => {
            alert('error, vuelve a intentar')
        } )
    }

    console.log(agePrediction);

    return(
        <>
        <h1>Predictor de Edad</h1>
        <p>Este predictor te permite ingresar uno o varios nombres para calcular la edad del nombre. <br/> Tambien puedes incluir el país.</p>

        <form onSubmit={Calcular} className='prediction-form-container'>
            <label id='name'>Nombre(s)</label>
            <br/>
            <input type='text' name='name' required minLength='3' />
            <br/>
            <label id='country'>Selecciona tu pais <span>(opcional)</span> </label>
            <br/>
            <select type='select' name='country'>

            <option value="">--Please choose an option--</option>
            {
                countryList.map((country, idx) => {
                   return (
                    <option name='country' value={country.code} key={idx}>{country.name}</option>
                   )
                    
                })
            }

            </select>

            
            <br/>
            <button type='submit'>Calcular</button>
        </form>

        <h2>Resultados</h2>
        
       
        </>
    )    
}

export default AgePredictor;