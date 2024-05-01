// Arrow function to declare Component as funcion
// same as App.jsx just syntax different
const FirstComponent = () => {

    //return all components must have
    return (
        <div>
            <h1>My first component!</h1>
            {/* here comment is HTML like but a little different because we are inside return */}
            {/* below is where attribute class in HTML is className in JSX - pay attention! */}
            <p className="test">Some test paragraph</p>
        </div>
    )

}

//export to allow us to import this component into others
export default FirstComponent