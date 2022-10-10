import '../css/PrimaryMenu.css'

function primaryMenu () {
    return (
        <>
        <div className='principal-container'>
            <div className='info-conainer'>
                <h1>Prueba Fintegra Cristhian Rojas</h1>
                <h2>Hola! Espero que estes bien. Soy desarollador Front-end Jr. Soy creativo, me gusta diseñar y ademas encontrar los pequeños detalles en el diseño que pueden marcar la diferencia.</h2>
            </div>
            <div className='task-container'>
                <div>
                    <a href='/cross'><h3>1. Creacion de Cruz.</h3></a>
                </div>
                <div>
                    <a href='/agepredictor'><h3>2. API - Age predictor</h3></a>
                </div>
            </div>
        </div>

        </>
    )
}

export default primaryMenu;