
export function ShopItem ({propForShopItem}) {
    return(
        <div className="shop-wrap">
            {
                propForShopItem.map((element=>{
                    const {id,title, price, image} = element;
                    return(
                        <div key={id} className="shop-item">
                            <p className="shop-title">{title}</p>
                            <img src={image} alt="pic" className="shop-img"/>
                            <p className="shop-price">{price}</p>
                        </div>
                    )
                }))
            }
        </div>
    )
}