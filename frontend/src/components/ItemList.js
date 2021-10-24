import Item from '../components/Item';
import './Item.css';

function ItemList(props){
    return (<div className="itemList">
        {props.items.map(item => (
            <Item 
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category} />

        ))}
    </div>)
}

export default ItemList;