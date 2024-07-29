import { useState } from "react";

const Login =() =>{
    return (
        <div>
            <h2>return if false</h2>
        </div>
    );
};

const Second =() => {
    return(
        <div>
            <h2>return if true</h2>
        </div>
    );
};

export default function CRender(){
    const [isTrue,setIsTrue]=useState(false);
    // if (isTrue){
    //     return(
    //     <div>
    //         <Second />
    //             <button onClick={() => setIsTrue(isTrue)}>Logout</button>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <Login/>
    //             <button onClick={() => setIsTrue(!isTrue)}>Login</button>
    //         </div>
    //     )
        
    // }
    return(
        <div>
            {isTrue &&(
                <div>
                    <Second/>
                    <button onClick={ () => setIsTrue(!isTrue)}>login</button>
                </div>
            )}
        </div>
        
    )
    };



