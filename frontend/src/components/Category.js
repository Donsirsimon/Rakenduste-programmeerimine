function Category(props) {
    return (
        <div className="categoryContainer">
            <h3>Nimi: </h3>
            <div className="categoryName">{props.name}</div>
            <div className="typeContainer">
            <h3>Tüüp: </h3>
                <div className="categoryType">{props.type}</div>
            </div>    
        </div>
    )
}


export default Category;


