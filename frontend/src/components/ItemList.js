import Item from '../components/Item';
import './Item.css';


//[{1},{2},{3}].map({1}=>isAddtoCart=true)
//[{1},{2},{3}].map({2}=>isAddtoCart=true)
//[{1},{2},{3}].map({3}=>isAddtoCart=true)

function ItemList(props){
    function deleteItem(itemId) {
        //console.log(itemId);
        props.onDeleteItem(itemId);
    }





    return (
        <div className="itemList">
            {props.items.map(item => (
                <Item 
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
                
                isAddToCartButton={props.isAddToCart}
                deleteItem={deleteItem}

                />

        ))}
    </div>);
}

export default ItemList;