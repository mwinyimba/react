import React from "react"
function SideBar({name, age}){
    let [count, setCount] = React.useState(0);
    let [namee, setName] = React.useState('');
    return(
        // <h1>hello {name} and {age}</h1>
        <div>
            <h1>hello {count} {name}</h1>
            <button onClick={()=>{
                setCount (count+=1)
                setName('juma')
            }}>Increment</button>

        </div>
    )

}
export default SideBar