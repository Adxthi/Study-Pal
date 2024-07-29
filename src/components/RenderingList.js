export default function RenderingList(){
    const fruits=[
    //"Apple","Banana","Cherry"];
    {name:"nisha",qualification:"sahin"}];//when array is empty,infuture we can add values to it.
    return(
    <div>
    <h2>List of fruits</h2>
    <ul>
    {fruits.map((item,index)=> ( //item is temp var it is used to store values temporarly and it is parameter
    // <li>{item.name}</li>--->obj can't directly accessed so .name
    //<li key={index}>{item}={index}</li> //to display the index value od items
    <div key={index}>
    <p>{item.name}={index}</p>
    <p>{item.qualification}={index}</p>
    </div>
    ) )}
    </ul>
    </div>
    )
    }