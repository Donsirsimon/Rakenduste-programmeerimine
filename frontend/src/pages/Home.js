import './Home.css'
import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Global.css'




function Home(){
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




    if (isLoading) {
        return (<div>Laeb...</div>)

    }



    return (
        <div>
            <h1>Esemed</h1>
             <ItemList items={loadedItems} />
             <Link to="add-item">
                 <button id="button1">Lisa uus ese</button>
             </Link>


        </div>
    )
}

export default Home;