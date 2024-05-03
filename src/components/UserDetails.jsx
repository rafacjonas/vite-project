export const UserDetails = ({name, age, job}) => {

    const n = 8

    const isRedTitle = true

    return (
        <div>
            {/* conditional (ternary) styling */}
            <h1 style={n < 10 ? ({color:"purple"}) : ({color:"grey"})}>Name: {name}</h1>
            <ul>
                <li>Age: {age}</li>
                <li>Job: {job}</li>
            </ul>
            {age >= 18 ? (
                //using style inline with js {}
                <p style={{color:"green", padding:"25px", borderTop:"25px"}}>This person can obtain driver license</p>
            ) : (
                <p style={{color:"red", padding:"25px", borderTop:"25px"}}>This person cannot obtain driver license</p>
            )}
            {/* Dynamic class styling */}
            <h2 className={isRedTitle ? "red-title" : "title"}>Subtitle</h2>
            {/* Module CSS */}
            
        </div>
    )
}
