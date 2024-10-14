import React from "react";
const FootwearComponent = () => {
    const itemList = [
        {itemid:1, itemname: "Nike", itemprice: 5999, offer: "50%"},
        {itemid:2, itemname: "HRX", itemprice: 6599, offer: "60%"},
        {itemid:3, itemname: "Adidas", itemprice: 7299, offer: "75%"},
        {itemid:4, itemname: "Reebok", itemprice: 6599, offer: "55%"},
    ]
    return(
        <>
            <h3>Footwear</h3>
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
export default FootwearComponent;