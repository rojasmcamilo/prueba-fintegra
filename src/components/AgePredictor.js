import "../css/AgePredictor.css"
import { countryList } from "../data";
import { useState } from 'react'
import axios from 'axios';

function AgePredictor () {

    const [agePrediction, setAgePrediction] = useState([])

    const predict = (e) => {
        e.preventDefault();

        const nameInput = e.target.name.value.trim().split(" ")
        const country =e.target.country.value
        let countOfParams 

        let params = nameInput.map(( person , idx ) =>{ return nameInput.length ===  1 ? "name=" + person :  "name[]=" + person })

        if(params.length > 1 ){
            params = params.join("&")
        } else if (params.length === 1) {
            params = params.toString()
            countOfParams = 1
        }
        
        let endPoint = (country === "") ?  `https://api.agify.io/?${params}` :  `https://api.agify.io/?${params}&country_id=${country}` ;
       
        axios.get(endPoint)
        .then(res => {
            let prediction = (typeof res.data === 'object' && countOfParams === 1 ) ? [res.data] : res.data ;
            setAgePrediction(prediction)
            e.target.name.value = "";
            e.target.country.value = "";
        })
        .catch(error => {
            alert('error, vuelve a intentar')
        } )
    }

    console.log(agePrediction);

    return(
        <>
        <a href='/' className='return-btn'>Regresar al menu</a>
        <section className="principal-age-container">
            <div className="agepredictor-container">
                <h1>Predecir la de edad</h1>
                <p>Este predictor te permite ingresar uno o varios nombres para calcular la edad del nombre. <br/> Tambien puedes incluir el país.</p>
                <form onSubmit={predict} className='prediction-form-container'>
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
            </div>

            <div className="responses-container">
                <h2>Resultados</h2> 
                <p></p>
                <table className="responses-table">
                    <tr>
                        <th><strong>Nombre</strong></th>
                        <th><strong>Edad</strong></th>
                    </tr>
                    {
                        agePrediction.map((nombre, idx) =>{
                            return <> 
                            <tr key={idx}>
                                <td>{nombre.name} </td>
                                <td>{nombre.age} </td>
                            </tr>
                            </>
                        })
                    }
                </table>

            </div>
        </section>
        </>
        
    )    
}

export default AgePredictor;