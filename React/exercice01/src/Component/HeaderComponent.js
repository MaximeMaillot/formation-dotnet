import React, { Component } from "react"
import "../css/HeaderComponent.css"

class HeaderComponent extends Component {
    render() {
        return (
            <div className="red flex">
                <img src="./M2ILOGO2.png"></img>
                <h1>M2i Formation</h1>
                <span>votre formation sur mesure</span>
            </div>
        )
    }
}

export default HeaderComponent