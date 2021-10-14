import React from "react";
import ItemDescription from "./ItemDescription";

function Item (props){
    return(
        <div>
            <h1>{props.name}</h1>
            <ItemDescription description = {props.description} />
            <h3><b>{props.price}€</b></h3>

        </div>

    )
}


export default Item