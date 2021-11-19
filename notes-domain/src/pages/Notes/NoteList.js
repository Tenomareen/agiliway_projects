import React, { Component } from "react";
import Note from "./Note";
import { connect } from "react-redux";
import { Row, Button, Empty, Spin } from "antd";
import ModalAdd from "./ModalAdd/ModalCreate";
import ModalDelete from "./ModalDelete/ModalDelete";
import ModalEdit from "./ModalEdit/ModalEdit";
import PropTypes from "prop-types";
import { closeNotes, modalNoteCloseAction, modalNoteShowAction } from "./actions/actions";
import {
  createNote,
  deleteNoteById,
  editNote,
  getNoteForEdit,
  getNoteList,
} from "./thunks/notesThunk";
import { loadingSelector, notesSelector } from "./selectors/notesSelectors";
import { idSelector, modalLoadingSelector, noteEditSelector, typeSelector } from "./selectors/modalSelectors";

class NoteList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  componentWillUnmount() {
    this.props.closeNotes();
  }

  handleSubmit = (editValues) => {
    const note = {
      name: editValues.name,
      author: editValues.author,
      description: editValues.description,
    };
    this.props.handleSubmitEdit(note, editValues.uuid);
  };

  render() {
    const { type, loading, notes, noteEdit, id, loadingModal } = this.props;
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>Notes</h1>
          <Button type="primary" onClick={() => this.props.showModal("create")}>
            Add New Note
          </Button>
        </div>
        <div className="site-card-wrapper">
          <Row gutter={16} style={{ justifyContent: "space-around" }}>
            {(!notes.length && !loading) && <Empty />}
            {!loading &&
              notes.map((note, index) => {
                return (
                  <Note
                    key={index}
                    note={note}
                    showModalDelete={this.props.showModal}
                    getNote={this.props.getNote}
                  />
                );
              })}
          </Row>
          {loading && <div><Spin/> Loading Note List...</div>}
          {type === "create" && (
            <ModalAdd
              visible={true}
              closeModal={this.props.closeModal}
              handleSubmitCreate={this.props.handleSubmitCreate}
              loading={loadingModal}
            />
          )}
          {type === "delete" && (
            <ModalDelete
              id={id}
              visible={true}
              handleDelete={this.props.handleDelete}
              closeModal={this.props.closeModal}
              loading={loadingModal}
            />
          )}
          {type === "edit" && (
            <ModalEdit
              visible={true}
              closeModal={this.props.closeModal}
              noteEdit={noteEdit}
              handleSubmitEdit={this.handleSubmit}
              loading={loadingModal}
            />
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  type: typeSelector(state),
  notes: notesSelector(state),
  loading: loadingSelector(state),
  noteEdit: noteEditSelector(state),
  id: idSelector(state),
  loadingModal: modalLoadingSelector(state),
});

const mapDispatchToProps = {
  getData: getNoteList,
  showModal: modalNoteShowAction,
  handleDelete: deleteNoteById,
  closeModal: modalNoteCloseAction,
  handleSubmitEdit: editNote,
  handleSubmitCreate: createNote,
  getNote: getNoteForEdit,
  closeNotes: closeNotes,
};

NoteList.propTypes = {
  type: PropTypes.string,
  notes: PropTypes.array,
  loading: PropTypes.bool,
  noteEdit: PropTypes.object,
  id: PropTypes.string,
  loadingModal: PropTypes.bool,
  getData: PropTypes.func,
  showModal: PropTypes.func,
  handleDelete: PropTypes.func,
  closeModal: PropTypes.func,
  handleSubmitEdit: PropTypes.func,
  handleSubmitCreate: PropTypes.func,
  getNote: PropTypes.func,
  closeNotes: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
