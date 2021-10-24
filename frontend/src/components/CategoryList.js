import Category from '../components/Category';
import './Category.css';

function CategoryList(props){
    return (<div className="categoryList">
        {props.categories.map(category => (
            <Category 
            key={category.id}
            name={category.name}
            type={category.category} />

        ))}
    </div>)
}

export default CategoryList;