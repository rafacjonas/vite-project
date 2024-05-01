
export const Container = ({children, myValue}) => {
  return (
    <>
        <h1>Container {myValue}</h1>
        {/* this is a children prop */}
        {children}
    </>
  )
}
