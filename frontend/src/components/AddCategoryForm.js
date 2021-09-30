import './AddCategoryForm.css'
import { useRef } from 'react';

function AddCategoryForm(props){
    const nameInputRef = useRef();
    const categoryInputRef= useRef();

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log("Vormi sisestus õnnestus");
        console.log(nameInputRef.current.value);
        console.log(categoryInputRef.current.value);

        const nameValue = nameInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const category = {
            "name": nameValue,
            "category": categoryValue
        }
        console.log(category);


        props.onAddCategory(category);
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br />
            <input type="text" placeholder="Kategooria nimi" required ref={nameInputRef} /><br />
            <label>Kategooria tüüp</label><br />
            <select ref={categoryInputRef}>
                <option value="PREMIUM">PREMIUM</option>
                <option value="DELUXE">DELUXE</option>
                <option value="BASIC">BASIC</option>
            </select>
            <br/>
            <button>Sisesta kategooria</button>
        </form>
    );
}

export default AddCategoryForm;

// Kategooriatüübid: PREMIUM, DELUXE ja BASIC
