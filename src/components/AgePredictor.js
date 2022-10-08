import "../css/AgePredictor.css"

function AgePredictor () {

    const calcular = (e) => {
        e.preventDefault();
        console.log('Esta funcionando el submit');
    }


    return(
        <>
        <h1>Predictor de Edad</h1>
        
        <form onSubmit={calcular}>
            <label id='name'>Ingresa tu nombre</label>
            <input type='text' name='name'/>
            <br/>
            <label id='country'>Selecciona tu pais</label>
            <input type='select' name='country'></input>
            <br/>
            <button type='submit'>Calcular</button>
        </form>
        </>
    )    
}

export default AgePredictor;