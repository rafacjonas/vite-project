const Events = () => {

    //arrow function, just like the component itself - so is the component a funcion? :O
    //(e) mean event, is a special argument that contains the event data
    const handleMyEvent = (e) => {
        console.log('You really clicked, didn\'t ya?!' )
        console.log(e)
    }

    //here you can render html even in js part (not inside return)
    const renderSomething = (x) => {

        if (x) {
            return <h2>Render me true</h2>
        } else {
            return <h2>Render me false</h2>
        }

    }

    return (
        <>
            {/* Here we are declaring the button with event, 
            remember a template expression returns JS so we will declar the funcion above 
            extra: syntax handleMyEvent() runs the JS function when it reads the element and not on event*/}
            <div>
                <button onClick={handleMyEvent}>Click me</button>
            </div>
            
            {/* of course you can create a funcion inside the funcion - imagine the possibilities?! :O */}
            <div>
                <button onClick={() => console.log('anonymous function is that you?')}>Click again</button>
            </div>
            <div>
                <button onClick={() => {

                    const isThisJS = true

                    if (isThisJS) {
                        console.log('of course it is me!')
                    }

                }}>One more</button>
                {/* careful here using too much events inside html it dificults readability, 
                so maybe you should declare it as new event right? */}
            </div>
            <div>
                {renderSomething(true)}
            </div>
        </>
    )

}

export default Events