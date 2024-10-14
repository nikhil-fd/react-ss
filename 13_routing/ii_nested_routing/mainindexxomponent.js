import React from "react";
import HeaderComponent from "./headercomponent";
import FooterComponent from "./footercomponent";
import NavigationComponent from "./navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./homecomponent";
import ElectronicsComponent from "./electronicscomponent";
import FashionComponent from "./fashioncomponent";
import FootwearComponent from "./footwearcomponent";
import CategoryComponent from "./categoriescomponent";
import ProductsComponent from "./productscomponent";
const MainIndexComponent = () => {
    return(
        <>
            <HeaderComponent/>
            <div className="row" style={{height:"450px"}}>
            <Router>
                <div className="col-3">
                    <NavigationComponent/>
                </div>
                <div className="col-9">
                        <Routes>
                            <Route path="/" element={<HomeComponent/>}></Route>
                        </Routes>
                        <Routes>
                            <Route path="/electronics" element={<ElectronicsComponent/>}></Route>
                        </Routes>
                        <Routes>
                            <Route path="/fashion" element={<FashionComponent/>}></Route>
                        </Routes>
                        <Routes>
                            <Route path="/footwear" element={<FootwearComponent/>}></Route>
                        </Routes>
                        <Routes>
                            <Route path="/category" element={<CategoryComponent/>}></Route>
                        </Routes>
                        <Routes>
                            <Route path="/products/:id" element={<ProductsComponent/>}></Route>
                        </Routes>
                        </div>
                    </Router>
                </div>
            <FooterComponent/>
        </>
    )
}
export default MainIndexComponent;