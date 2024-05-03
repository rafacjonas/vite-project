//hooks
//import { useState } from 'react'

//components
// import FirstComponent from './components/FirstComponent'
// import TemplateExpressions from './components/TemplateExpressions'
// import HierarchyComponent from './components/HierarchyComponent'
// import Events from './components/Events'
// import Challenge from './components/Challenge'
// import { ListRender } from './components/ListRender'
// import { ConditionalRender } from './components/ConditionalRender'
// import { ShowProps } from './components/ShowProps'
// import { CarDetails } from './components/CarDetails'
// import { Container } from './components/Container'
// import { ExecuteFunction } from './components/ExecuteFunction'
// import { Message } from './components/Message'
// import { ChangeMessageState } from './components/ChangeMessageState'
//import { UserDetails } from './components/UserDetails'
import { MyForm } from './components/MyForm'

//styles
import './App.css'
import { Title } from './components/Title'

//images
// import MovieRankingImg from './assets/movie_ranking.png'
// import ManageData from './components/ManageData'

function App() {

  //this is a hook used as a props
  // const [name] = useState('Rafael')

  // const cars = [
  //   {id:1, brand:'Ferrari', color:'red', newCar:true, km:0},
  //   {id:2, brand:'Porshe', color:'yellow', newCar:false, km:1233213},
  //   {id:3, brand:'Jeep', color:'green', newCar:false, km:11111}
  // ]

  // function showMessage() {
  //   console.log('Luke I am your father!')
  // }

  // const [message, setMessage] = useState("")

  // const handleMessage = (msg) => {
  //   setMessage(msg)
  // }

  // const peoples = [
  //   {id: 1, name:"Rafael", age:34, job:"Unemployed"},
  //   {id: 2, name:"Larissa", age:12, job:"Student"},
  //   {id: 3, name:"Henrique", age:51, job:"Engineer"},
  //   {id: 4, name:"Fernanda", age:18, job:"Student"},
  //   {id: 5, name:"Raquel", age:27, job:"Doctor"}
  // ]

  return (
    /* multi line comment and line comment works here because is Javascript */
    // All inside jsx return must be enclosed with a tag may be div or even blank tag (cleaner code)
    <> {/* <- fragment */}
      {/* Forms */}
      <MyForm user={{name:"Rafael", email:"rfhjones@gmail.com", bio:"", role:""}}/>
      {/* 
      {peoples.map((people) => (
        <UserDetails key={people.id} name={people.name} age={people.age} job={people.job}/>
      ))}
      <Title />
      <h1 className='my_title'>Testing scoped css</h1>
      public image can be accessed direct from the root
      <div>
        <img src="/birthday.png" alt="Birthday giftcard"/>
      </div>
      asset image need to be imported (useful to reutilize across the project like a variable)
      <div>
        <img src={MovieRankingImg} alt="Movie ranking image"/>
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      props
      <ShowProps name={name} />
      destructured props
      <CarDetails brand='BMW' km={10000} color='red' newCar={false}/>
      reusing component with props
      <CarDetails brand='Ford' km={0} color='blue' newCar={true}/>
      <CarDetails brand='Fiat' km={40000} color='white' newCar={false}/>
      loop
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
      ))}
      children prop
      <Container myValue='test'>
        <p>This is the children prop</p>
      </Container>
      passing a function as a prop
      <ExecuteFunction myFunction={showMessage}/>
      state lift
      <ChangeMessageState handleMessage={handleMessage}/>
      <Message msg={message}/>
      <h1>Hello World React!</h1>
      <Challenge />
      <FirstComponent />
      <TemplateExpressions />
      <HierarchyComponent />
      <Events /> */}
    </> //<- fragment
  )
}

export default App
