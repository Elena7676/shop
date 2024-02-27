
import { dataShop } from "./dataShop";

function Button ({propForSearch, propForAll}) {
    return(
        <div className="shop-wrap">
            <button className="btn"
            onClick={() => propForAll(dataShop)}>All</button>
            <button className='btn'
            onClick={() => propForSearch("dress")}>Dresses</button>
            <button className="btn" 
            onClick={() => propForSearch("skirt")}>Skirt</button>
            <button className="btn" 
            onClick={() => propForSearch("coat")}>Coat</button>
            <button className="btn" 
            onClick={() => propForSearch("accessories")}>Accessories</button>
        </div>
    )
}
export default Button;