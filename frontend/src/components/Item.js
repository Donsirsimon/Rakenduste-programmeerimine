import { Link } from 'react-router-dom';


function Item(props) {

    function handleDelete(itemId) {
        console.log(itemId);
        props.deleteItem(itemId);
    }



    return (
        <div className="items">
            <div className="itemContainer">
                {props.isSingleitemView ? 
                <div>
                    <h3>Nimi: </h3>
                    <div className="itemName">{props.name}</div>
                    <div className="priceContainer">
                        <h3>Hind: </h3>
                        <div className="itemPrice">{props.price}</div>
                    </div>    
                    <h3>Kategooria: </h3>
                    <div className="itemCategory">{props.category}</div>
                    <br/>
                </div> : 
                
                <Link to={`item/${props.id}`}>
                    <h3>Nimi: </h3>

                    <div className="itemName">{props.name}</div>
                    <div className="priceContainer">
                        <h3>Hind: </h3>
                        <div className="itemPrice">{props.price}</div>
                    </div>    
                    <h3>Kategooria: </h3>
                    <div className="itemCategory">{props.category}</div>
                    <br/>
                </Link> }


                {props.isAddToCartButton ? <button>Lisa ostukorvi</button> : 
                <div>
                    <button onClick={()=>handleDelete(props.id)}>X</button>
                    <Link to={`edit-item/${props.id}`}>
                        <button>Muuda toode</button>
                    </Link>
                </div>}
                
            </div>
        </div>    
    )
}

export default Item;


//<div>{ props.isAddToCartButton.toString() }</div>

//Home/AdminHome "true" => ItemList => Item (props. kaudu võtsin kaasa)
//Itemis toimub kustutamine =>ItemList => AdminHome(tehakse API päring)(props.)..... jne