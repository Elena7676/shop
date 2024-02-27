import { useState } from "react";
function Button ({propForSearch}) {
    const [isActive, setIsActive] = useState(false);
    const changeClass = () => {
        setIsActive(! isActive)
        }
    
    return(
        <div className="shop-wrap">
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