import React, { Component } from "react"
import "../css/SideComponent.css"

class SideComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="blue">
                {this.props.name}
            </div>
        )
    }
}

export default SideComponent