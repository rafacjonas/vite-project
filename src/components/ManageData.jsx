import { useState } from "react" //useState is a hook native from react

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(10)

    //console.log(someData)

    //console.log(number)

    return (
        <>
            <div>
                <p>Some value: {someData}</p>
                <button onClick={() => {someData = 15}}>Change variable</button>
            </div>
            <div>
                <p>Other value: {number}</p>
                <button onClick={() => setNumber(25)}>Use state!</button>
            </div>
        </>
    )

}

export default ManageData