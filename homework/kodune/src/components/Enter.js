import React, { useState } from "react";


function Enter (){

    const [entered, setEntered] = useState(false);
    const [name, setName] = useState("");
    
    


    return(
        <div>
           <h1>Tere tulemast</h1>
           {entered ? (<h2>Tere {name}</h2>) : (<h2>Palun sisesta nimi ja sisene</h2>)}
           {!entered && (
               <>
                <h4>Sisesta oma nimi</h4>

               <input type="text" placeholder={name} onChange={event => setName(event.target.value)} /><br />
               </>
           )}
           
            <button onClick={() => setEntered(!entered)}> {entered ? "Lahku" : "Sisene"}</button>
            
        </div>

    )
}


export default Enter 