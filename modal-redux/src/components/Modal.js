import React from "react";
import "./styles.scss";

const MyModal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modal">
        <div className="modal-content">
           <div className="modal-header">
               <h4 className="modal-title">
                   This is test Modal Layout
               </h4>
           </div>
           <div className="modal-body">
               Modal Body
           </div>
           <div className="modal-footer">
               <button onClick={props.onClose}> Close </button>
           </div>
        </div>
    </div>
    )
}

export default MyModal