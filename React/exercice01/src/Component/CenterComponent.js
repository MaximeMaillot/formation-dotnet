import React, { Component } from "react"
import "../css/CenterComponent.css"

class CenterComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="cyan">
                {this.props.name}
            </div>
        )
    }
}

export default CenterComponent