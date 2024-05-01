import { useState } from "react"

//here you can use export together with component declaration and don't 
export const ListRender = () => {

    //array
    const [list] = useState(['Rafael','Bia','Herykson'])

    //array of objects (from database for example)
    const [users, setUsers] = useState([
        {id:0,name:'Rafael',age:34},
        {id:1,name:'Bia',age:24},
        {id:2,name:'Herykson',age:18}
    ])

    const deleteRandom = () => {

        //0, 1 or 2
        const randomNumber = Math.floor(Math.random() * 3)

        console.log(randomNumber)

        //previous state funcion, using filter funcion to return only the ids different from one generated in randomNumber
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })

    }

    return (
        <>
            <div>
                <ul>
                    {/**when returning jsx is consider object then you use () and not {} on returning function */}
                    {/**index used to fix key warn - careful if changing array index will change as well */}
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <ul>
                    {/** unique key is used as index this is preferable so we don't lose index when array changes */}
                    {users.map((user) => (
                        <li key={user.id}>{user.name} {user.age}</li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={deleteRandom}>Delete user</button>
            </div>
        </>
    )
}