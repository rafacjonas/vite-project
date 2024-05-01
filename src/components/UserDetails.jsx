export const UserDetails = ({name, age, job}) => {

    return (
        <div>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Job: {job}</li>
            </ul>
            {age >= 18 ? (<p>This person can obtain driver license</p>) : (<p>This person cannot obtain driver license</p>)}
        </div>
    )
}
