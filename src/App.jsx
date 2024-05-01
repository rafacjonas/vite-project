//components
import FirstComponent from './components/FirstComponent'

//styles
import './App.css'

function App() {

  return (
    /** multi line comment and line comment works here because is Javascript*/
    // All inside jsx return must be enclosed with a tag may be div or even blank tag (cleaner code)
    <> 
      <h1>Hello World React!</h1>
      <FirstComponent/>
    </>
  )
}

export default App
