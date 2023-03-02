import React, { Component } from "react"
import "../css/ContainerComponent.css"
import SideComponent from "./SideComponent"
import CenterComponent from "./CenterComponent"

class ContainerComponent extends Component {
    render() {
        return (
            <div className="container">
                <SideComponent name="Left" />
                <CenterComponent name="Center" />
                <SideComponent name="Right" />
            </div>
        )
    }
}

export default ContainerComponent