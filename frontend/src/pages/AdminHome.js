
import './Home.css'
import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Global.css'




function AdminHome(){
    const [isLoading, setIsLoading] = useState(true);

    const[loadedItems, setLoadedItems] = useState([]);



    useEffect (() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);

            setIsLoading(false);
            setLoadedItems(data);

        });
    },[])

    function makeDeleteRequest(itemId){
        fetch('http://localhost:8080/delete-item/' + itemId,
        { method: 'DELETE' }
        ).then(res => {
            return res.json();
        }).then(data =>{
            setLoadedItems(data);
        });
    }


    if (isLoading) {
        return (<div>Laeb...</div>)
    }



    return (
        <div>
            <h1>Esemed</h1>
            <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={ false } items={loadedItems} />
            <Link to="add-item">
                <button id="button1">Lisa uus ese</button>
            </Link>
        </div>
    )
}

export default AdminHome;