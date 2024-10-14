//🚩API handling by "Axios" library🎁

import React from "react";
import axios from 'axios';
export default class HandleApiByAxios extends React.Component{
    constructor(){
        super();
        this.state = {
            picture: []
        }
    }
    componentDidMount(){
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then((response) => (
            this.setState({
                picture: response.data.photos
            })
        ))
    }
    render(){
        return(
            <>
                <div className="card-group"> 
                    {
                        this.state.picture.map((elem) => (
                            <div className="card" key={elem.id}>
                                <div className="card-header">
                                    {elem.id}
                                </div>
                                <div className="card-body">
                                    <img src={elem.img_src} width={150} height={150} alt={elem.id}/>
                                </div>
                                <div className="card-footer">
                                    {elem.id}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}