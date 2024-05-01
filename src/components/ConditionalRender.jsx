import React, { useState } from "react"

export const ConditionalRender = () => {

    const [x] = useState(false)

    const [name, setName] = useState('Rafaela')

    return (

        <>
            {/* simples if and !if */}
            <h1>Will this be shown?</h1>
            {x && <p>Yes!</p>}
            {!x && <p>Only if x is false</p>}
            {/* ternary if-else */}
            {name === 'Rafael' ? (<div>
                <p>Name is {name}</p>
            </div>) : (<div>
                <p>Who are you?</p>
            </div>)}
            <button onClick={() => setName('Rafael')}>Change name</button>
        </>

    )
    
}
