import HierarchyComponent from "./HierarchyComponent"

const TemplateExpressions = () => {
 
    // here is javascript, remember html is only inside the return - not true check Events.jsx!!
    const name = 'Rafa'
    const data = {
        age: 34,
        job: 'developer'
    }
    const nothing = null

    return (
        <>
            {/* template expression bellow return name */}
            <h1>Hello, {name} the {data.job}!</h1>
            <p>{4 + 4}</p>
            <p>{console.log('this is a log!')}</p>
            <p>{nothing}</p>
            <HierarchyComponent />
        </>
    )

}

export default TemplateExpressions