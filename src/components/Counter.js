import {useState} from "react";
export default function Counter(){
    //var count=0;

    const[count,setCount]=useState(0);

    const increment = () => {
            //count++;
            setCount(count+1);
    }
    const decrement = () =>{
        //count--;
        if(count>0){
        setCount(count-1);
        }
    }
    return (
        <div className="container mt-5">
            <div className="p-4 bg-light border rounded shadow">
                <h1 className="text-primary">Counter Application</h1>
                <hr />
                <h2>
                    Count: <button className="btn btn-outline-primary">{count}</button>
                </h2>
                <div className="d-flex gap-2">
                    <button onClick={increment} className="btn btn-success">Increment</button>
                    <button onClick={decrement} className="btn btn-danger">Decrement</button>
                </div>
            </div>
        </div>
    );
}