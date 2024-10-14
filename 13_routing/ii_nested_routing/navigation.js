import React from "react";
import { NavLink} from "react-router-dom";
export default class NavigationComponent extends React.Component {
  render() {
    return (
      <>
            <nav>
              <ul className="list-unstyed">
                <li className=" d-grid mt-3" key="home" style={{width:"200px"}}>
                  <NavLink className="btn btn-primary" to="/" end>
                    Home
                  </NavLink>
                </li>
                <li className=" d-grid mt-3" key="electronics" style={{width:"200px"}}>
                  <NavLink className="btn btn-primary" to="/electronics">
                    Electronics
                  </NavLink>
                </li>
                <li className=" d-grid mt-3" key="fashion" style={{width:"200px"}}>
                  <NavLink className="btn btn-primary" to="/fashion">
                    Fashion
                  </NavLink>
                </li>
                <li className=" d-grid mt-3" key="footwear" style={{width:"200px"}}>
                  <NavLink className="btn btn-primary" to="/footwear">
                    Footwear
                  </NavLink>
                </li>
                <li className=" d-grid mt-3" key="category" style={{width:"200px"}}>
                  <NavLink className="btn btn-primary"  to="/category">
                    Get Categories
                  </NavLink>
                </li>
              </ul>
            </nav>
      </>
    );
  }
}
