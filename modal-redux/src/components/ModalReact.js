import React, { Component } from "react";
import MyModal from "./Modal";
import "./styles.scss";

class ModalReact extends Component {
    state = {
        show: false,
    }

    render() {
        return (
            <>
            <button className="rights" onClick={() => this.setState({show: true,})}> Modal React</button>
            <MyModal 
            onClose={() => this.setState({show: false,})}
            show={this.state.show}/>
            </>
            );
    }
}

export default ModalReact;