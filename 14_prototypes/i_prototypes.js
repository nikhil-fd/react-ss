//🚩Prop-Types🎁
//👉prop-types is used to make the react code strongly typed.
//👉prop-types allows you to specify the type of data.
//👉It means we can pass only particular data type and that data type can not be modify later.
//👉suppose currently we have passed "string" data type to a property and late if we pass "number",
//   data type to that same property then in "Prop-Types" it will not allow.

import React from "react";
import PropTypes from "prop-types";

const DeliveryComponent = (props) => {
    return(
        <>
            <dl>
                <dt>Shipped From</dt>
                <dd>{props.shipFrom}</dd>
                <dt>Delivery To</dt>
                <dd>{props.deliveryTo}</dd>
                <dt>PinCode</dt>
                <dd>{props.pincode}</dd>
                <dt>Item Name</dt>
                <dd>{props.itemName}</dd>
                <dt>Item Price</dt>
                <dd>{props.itemPrice}</dd>
            </dl>
        </>
    )
}

DeliveryComponent.PropTypes = {
    shipFrom: PropTypes.string,
    deliveryTo: PropTypes.string,
    pincode: PropTypes.number,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number
}