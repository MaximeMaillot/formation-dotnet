import React, { Component } from "react"
import "../css/FooterComponent.css"

class FooterComponent extends Component {
    render() {
        return (
            <div className="yellow">
                <span>Ma première page perso générée par react - Copyright@2023 - <a style={{ color: "blue" }}>Me contacter</a></span>
            </div>
        )
    }

}

export default FooterComponent