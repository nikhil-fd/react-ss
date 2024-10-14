//🚩API handling by "fetch" library🎁

import React from "react";
export default class ApiFetchComponent extends React.Component{
    constructor(){
        super();
        this.state= {
            picture: []
        }
    }
    componentDidMount(){
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then((response) => response.json())    
        .then((response) => (
            this.setState({
                picture: response.photos
            })
        ))
    }
    render(){
        return(
            <>
                <h2>fetch api</h2>
                <div className="card-group flex-column">
                    {
                        this.state.picture.map((elem) => (
                             <div className="card mt-3" key={elem.id}>
                                <div className="card-header">
                                    {elem.name}
                                </div>
                                <div className="card-body">
                                    <img src={elem.img_src} alt={elem.id} width={150} height={150}/>
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


//NOTE: When fetch() method fetching data from url that data type used to "json". 
//      So, by-default fetch data remains in "json" format, so it is optional to convert in "json" format.