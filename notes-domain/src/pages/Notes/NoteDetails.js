import { Card } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getNoteDetails } from "./thunks/noteThunk";
import PropTypes from "prop-types";

class NoteDetails extends Component {
  componentDidMount() {
    this.props.getNoteById(this.props.match.params.id);
  }

  render() {
    const { noteDetails } = this.props;
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "50px" }}
      >
        <Card
          title={noteDetails.name}
          extra={<NavLink to="/notes">Back</NavLink>}
          style={{ width: 500, fontSize: "large" }}
        >
          <p>
            <label style={{ fontWeight: "bold" }}>Author : </label>
            {noteDetails.author}
          </p>
          <p>
            <label style={{ fontWeight: "bold" }}>Description : </label>
            {noteDetails.description}
          </p>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  noteDetails: state.noteDetails.note,
});
const mapDispatchToProps = {
  getNoteById: getNoteDetails,
};

NoteDetails.propTypes = {
  noteDetails: PropTypes.object,
  getNoteById: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);
