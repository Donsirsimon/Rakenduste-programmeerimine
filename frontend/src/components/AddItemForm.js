import './AddItemForm.css'
import { useRef } from 'react';
import '../Global.css'

function AddItemForm(props){
    const nameInputRef = useRef();
    const priceInputRef= useRef();
    const categoryInputRef= useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log("Vormi sisestus õnnestus");
        console.log(nameInputRef.current.value);
        console.log(priceInputRef.current.value);
        console.log(categoryInputRef.current.value);

        const nameValue = nameInputRef.current.value;
        const priceValue= priceInputRef.current.value;
        const categoryValue= categoryInputRef.current.value;

        const item = {
            "name": nameValue,
            "price": priceValue,
            "category": categoryValue
        }
        console.log(item);


        props.onAddItem(item);
    }


    return (
        <div className="formContainer">
            <form onSubmit={formSubmitHandler}>
                <label>Eseme nimi:</label><br />
                <input type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
                <label>Eseme hind:</label><br />
                <input type="text" required ref={priceInputRef} /><br />
                <label>Eseme kategooria:</label><br />
                <input type="text" required ref={categoryInputRef} /><br />
                <button>Sisesta uus ese</button>
            </form>
        </div>
    );
}


export default AddItemForm;