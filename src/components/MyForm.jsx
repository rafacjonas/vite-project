import './MyForm.css'
import { useState } from 'react'

  export const MyForm = ({user}) => {
  
  const [name, setName] = useState(user ? user.name : "Default name") 
  const [email, setEmail] = useState(user ? user.email : "Default email")
  const [bio, setBio] = useState("")
  const [role, setRole] = useState("")

  const handleName = (e) => {
    //console.log(e.target.value)
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Sending form ... ')
    console.log(name)
    console.log(email)
    console.log(bio)
    console.log(role)

    //cleaning form
    setName("")
    setEmail("")
    setBio("")
    setRole("")
  }

  //console.log(name)
  //console.log(email)

  return (
    <div>
      {/* Forms (two different)*/}
      <h1>Forms</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input 
            type="text" 
            name='name' 
            placeholder='Digit your name' 
            onChange={handleName}
            value={name} />
        </div>
        <label>
          <span>E-mail: </span>
          <input type='email' name='email' placeholder='Digit your mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        <label>
          <span>Bio: </span>
          <textarea name='bio' placeholder='Tell me about yourself' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        <label>
          <span>Role: </span>
          <select name='role' onChange={(e) => setRole(e.target.value)} value={role}>
            <option value='user'>User</option>
            <option value='editor'>Editor</option>
            <option value='admin'>Admin</option>
          </select>
        </label>
        <input type='submit' value='Send'/>
      </form>
    </div>
  )
}
