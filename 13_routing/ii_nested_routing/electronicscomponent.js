import React from "react";
const ElectronicsComponent = () => {
    const itemList = [
        {itemid:1, itemname: "Haier Ovan", itemprice: 5899, itemmodel: 2022},
        {itemid:2, itemname: "LG Washing Machine", itemprice: 25999, itemmodel: 2024},
        {itemid:3, itemname: "Samsung Fridge", itemprice: 12755, itemmodel: 2023},
        {itemid:4, itemname: "Bajaj Grinder", itemprice: 7899, itemmodel: 2023},
    ]
    return(
        <>
            <h3>Electronics</h3>
            <table className="table table-hover table-bordered table-primary table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Model</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemList.map(item => (
                            <tr key={item.itemid}>
                                <td>{item.itemname}</td>
                                <td>{item.itemprice}</td>
                                <td>{item.itemmodel}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default ElectronicsComponent;