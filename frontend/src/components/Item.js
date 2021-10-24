


function Item(props) {
    return (
        <div className="items">
            <div className="itemContainer">
                <h3>Nimi: </h3>
                <div className="itemName">{props.name}</div>
                <div className="priceContainer">
                    <h3>Hind: </h3>
                    <div className="itemPrice">{props.price}</div>
                </div>    
                <h3>Kategooria: </h3>
                <div className="itemCategory">{props.category}</div>
                <br/>
            </div>
        </div>    
    )
}

export default Item;