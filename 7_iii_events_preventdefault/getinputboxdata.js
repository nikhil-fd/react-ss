//Below example belong to chapter 17👇

class ProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product: {
                productname: "",
                productprice: ""
            }
        }
        this.getProductName = this.getProductName.bind(this)  
        this.getProductPrice = this.getProductPrice.bind(this)
    }
    getProductName(e){        //👈👌👆if we not bind the method then the method can not update the value in state which is placed in constructor so need to bind getProductName() method in constructor then only value can update in state.
        this.setState({
            product: {
                productname: e.target.value,
                productprice: this.state.product.productprice
            }
        })
    }
    getProductPrice(e){
        this.setState({
            product: {
                productprice: e.target.value,
                productname: this.state.product.productname
            }
        })
    }
    render(){
        return(
            <>
                <h3>Register Product</h3>
                <dl>
                    <dt><label for="pname">Product Name</label></dt>
                    <dd><input type="text" id="pname" onChange={this.getProductName}/></dd>
                    <dt><label for="price">Product Price</label></dt>
                    <dd><input type="text" id="price" onChange={this.getProductPrice}/></dd>
                </dl>
                <dl>
                    <h3>Product Details</h3>
                    <dl className="row">
                        <dt className="col-3">Name</dt>
                        <dd className="col-9">{this.state.product.productname}</dd>
                        <dt className="col-3">Price</dt>
                        <dd className="col-9">{this.state.product.productprice}</dd>
                    </dl>
                </dl>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <ProductComponent/>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)