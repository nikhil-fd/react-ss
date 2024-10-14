import React from "react";
const FashionComponent = () => {
    const itemList = [
        {itemid:1, itemname: "Lee Jeans", itemprice: 2999, offer: "50%"},
        {itemid:2, itemname: "Spykar Shirts", itemprice: 1599, offer: "60%"},
        {itemid:3, itemname: "Manyavar Kurta", itemprice: 8995, offer: "75%"},
        {itemid:4, itemname: "Arman T-shirt", itemprice: 1259, offer: "55%"},
    ]
    return(
        <>
            <h3>Fashion</h3>
            <table className="table table-hover table-bordered table-primary table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Offer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemList.map(item => (
                            <tr key={item.itemid}>
                                <td>{item.itemname}</td>
                                <td>{item.itemprice}</td>
                                <td>{item.offer}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default FashionComponent;