
function List(){
    const arr1 = ["html" , "css" , "js" , "react"];
    const arr2 = arr1.map( (x)=>{
        return <li>{x}</li>;
    })
    console.log(arr2);
    return(
        <ul>
            {arr2}
        </ul>
    )
}

export default List;