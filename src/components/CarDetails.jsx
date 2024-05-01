export const CarDetails = ({brand,km,colour,newCar}) => {
  return (
    <div><h1>CarDetails</h1>
        <ul>
            <li>Brand: {brand}</li>
            <li>Km: {km}</li>
            <li>Colour: {colour}</li>
        </ul>
        {newCar && <p>This car is brand new!</p>}
    </div>
  )
}
