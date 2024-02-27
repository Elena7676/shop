import { useState } from "react";
import { dataShop } from "./dataShop";
import { ShopItem } from "./ShopItem";
import Button from "./Button";
function Shop () {
    const [itemShop, setItemShop] = useState(dataShop);
    const chosenBtn =(forSearch)=> {
        const newChosenBtn = dataShop.filter(element => element.forSearch ===forSearch)
        setItemShop(newChosenBtn)
    }
    
    return (
        <div>
            <Button 
            propForSearch={chosenBtn}/>
            <ShopItem propForShopItem={itemShop}/>
        </div>
    )
}
export default Shop;